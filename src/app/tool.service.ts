import { Plot } from './plot/plot';
import { Injectable } from '@angular/core';
import { Tool } from './tools/tool';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  hour = 3000;

  constructor() { }

  defaultTools = [
    new Tool(1, 'Ready Land', (plot: Plot) => {
      if (!plot.ready) {
        plot.ready = new Date();
        plot.plant = null;
        plot.lastWatered = null;
        plot.planted = null;
      }
    }, 'assets/img/ready-land.svg'),

    new Tool(2, 'Water', (plot: Plot) => {
      if (plot.plantIsAlive()) {
        plot.lastWatered = plot.lastWatered ? new Date() : null;
      }
    }, 'assets/img/water.svg'),

    new Tool(3, 'Harvester', (plot: Plot, cb) => {
      if (plot.plant && plot.planted.getTime() + (plot.plant.hoursToHarvest * this.hour) < Date.now() && plot.plantIsAlive()) {
        cb();
        plot.planted = null;
        plot.ready = null;
        plot.plant = null;
        plot.lastWatered = null;
      }
    }, 'assets/img/harvester.svg'),

    new Tool(4, 'Burn to ashes', (plot: Plot) => {
        plot.ready = null;
        plot.plant = null;
        plot.lastWatered = null;
        plot.planted = null;
    }, 'assets/img/fire.svg')
  ];

  getAllTools(): Tool[] {
    return this.defaultTools;
  }

  getTool(id: number) {
    return this.defaultTools.find(x => x.id === id);
  }
}
