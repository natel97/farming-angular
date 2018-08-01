import { ToolService } from './../tool.service';
import { Component, OnInit, Input } from '@angular/core';
import { Plot } from './plot';
import { InventoryService } from '../inventory.service';
import { StatService } from '../stat.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private toolService: ToolService, private statService: StatService) { }

  hour = 3000; // Decrease this to speed up time!
  realHour = 1000 * 60 * 60;

  @Input() plot: Plot;
  image: string;
  dry: boolean;
  hover: boolean;

  ngOnInit() {
    setInterval(() => {
      this.image = this.getCurrentState();
    }, 300);
  }

  getHoursLeft() {
    return this.plot.plant.hoursToHarvest * this.hour - (Date.now() - this.plot.planted.getTime()) / this.realHour * this.hour;
  }

  getWaterPercent() {
    return 100 - ((Date.now() - this.plot.lastWatered.getTime()) / this.hour * 100) / (this.plot.plant.hoursToDie);
  }

  allowDrop(event) {
    event.preventDefault();
  }

  plantSomething(event) {
    const id = parseInt(event.dataTransfer.getData('plant'), 10);
    const tool = parseInt(event.dataTransfer.getData('tool'), 10);
    if (id && !this.plot.plant) {
      this.inventoryService.plantSeed(id, this.plot);
    } else if (tool) {
      this.toolService.getTool(tool).doWork(this.plot, () => this.makeDatMoney());
    }
  }

  makeDatMoney() {
    this.statService.stats.money += this.plot.plant.worth;
    this.statService.stats.experience += this.plot.plant.experienceGained;
    this.statService.stats.level = this.statService.stats.experience / 1000;
  }

  getCurrentState() {
    if (!this.plot.planted) {
      return this.plot.ready ? '/assets/img/ready-plot.svg' : '/assets/img/need-work-plot.svg';
    }
    const age = Date.now() - this.plot.planted.getTime();
    const dryAge = Date.now() - this.plot.lastWatered.getTime();

    this.dry = dryAge > this.plot.plant.hoursToDry * this.hour;

    if (!this.plot.plantIsAlive()) {
      return this.plot.plant.images.dead;
    }
    if (age < this.plot.plant.hoursToTeen * this.hour) {
      return  '/assets/img/seeded-plot.svg';
    }
    if (age < this.plot.plant.hoursToHarvest * this.hour) {
      return this.plot.plant.images.teen;
    }
    return this.plot.plant.images.harvestable;
  }
}
