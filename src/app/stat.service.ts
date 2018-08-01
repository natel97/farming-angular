import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  stats = {
    money: 10,
    experience: 0,
    level: 1
  };

  constructor() {
    window['Give Me MONEY!!!'] = (a) => this.cheatCodeForMoney(a);
  }

  cheatCodeForMoney(amount) {
    this.stats.money += amount;
  }

  getStats() {
    return this.stats;
  }

}
