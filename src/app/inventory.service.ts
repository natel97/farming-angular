import { Plot } from './plot/plot';
import { Injectable } from '@angular/core';
import { Plant } from './plot/plant';
import { Item } from './item/item';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  defaultInventory: Item[] = [
    new Item(1, new Plant(1, 10, {
      dead: 'assets/img/dead.svg',
      harvested: 'assets/img/sunflower.svg',
      harvestable: 'assets/img/pluckable-sunflower.svg',
      teen: 'assets/img/young-sunflower.svg',
    }, 25, 7, 14, 21, 42, 1000, 'Sunflower'), 100, 25, 2),
    new Item(2, new Plant(2, 10, {
      dead: 'assets/img/dead.svg',
      harvestable: 'assets/img/happy-watermelon.svg',
      harvested: 'assets/img/watermelon.svg',
      teen: 'assets/img/teen-watermelon.svg',
    }, 50, 4, 8, 21, 42, 700, 'Watermelon'), 100, 25, 2)
  ];

  getAvailableInventory(): Item[] {
    return this.defaultInventory;
  }
  getPlantsToPurchase(): Observable<Item[]> {
    return this.http.get<Item[]>('/assets/plants.json');
  }

  plantSeed(id: number, plot: Plot) {
    const item = this.defaultInventory.find(x => x.id === id);
    if (item.quantity > 0 && plot.ready) {
      item.quantity--;
      plot.plant = item.plant;
      plot.planted = new Date();
      plot.lastWatered = new Date();
    }
  }
}
