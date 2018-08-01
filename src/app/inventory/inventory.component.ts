import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Plant } from '../plot/plant';
import { Item } from '../item/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items: Item[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.items = this.inventoryService.getAvailableInventory();
  }

  dragPlant(event) {
    const id = this.items[event.target.dataset.index].id;
    event.dataTransfer.setData('plant', id);
  }
}
