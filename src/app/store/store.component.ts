import { ToolService } from './../tool.service';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Item } from '../item/item';
import { StatService } from '../stat.service';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  items: Item[];
  quantity = 0;
  selectedItem: Item;
  stats;

  constructor(private inventoryService: InventoryService, private statService: StatService, private toolService: ToolService,
    private farmService: FarmService) {
  }

  ngOnInit() {

    this.inventoryService.getPlantsToPurchase().subscribe((val) => this.items = val);
    this.stats = this.statService.getStats();
  }

  purchase() {
    if (this.stats.money >= this.selectedItem.cost * this.quantity) {
      this.inventoryService.defaultInventory.find(x => x.id === this.selectedItem.id).quantity += this.quantity;
      this.stats.money -= this.selectedItem.cost * this.quantity;
      this.quantity = 0;
      this.cancel();
    }
  }

  purchasePlot(): void {
    this.farmService.addPlot(this.stats);
  }

  selectItem(item: Item) {
    this.selectedItem = item;
    document.getElementById('popup').classList.remove('hidden');
  }

  cancel() {
    document.getElementById('popup').classList.add('hidden');
  }


}
