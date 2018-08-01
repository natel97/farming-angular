import { Injectable } from '@angular/core';
import { Plot } from './plot/plot';

@Injectable({
  providedIn: 'root'
})

export class FarmService {

  plots: Plot[] = [
    new Plot(1, 1, null, null, null, null),
    new Plot(2, 2, null, null, null, null),
    new Plot(3, 3, null, null, null, null),
    new Plot(4, 4, null, null, null, null)
  ];

  getFarmPlots(): Plot[] {
    return this.plots;
  }

  addPlot(stats: any): void {
    if (stats.money >= 1000) {
      stats.money -= 1000;
      this.plots.push(new Plot(this.plots.length + 1, this.plots.length + 1, null, null, null, null));
    }
  }

  constructor() { }
}
