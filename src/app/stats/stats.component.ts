import { Component, OnInit } from '@angular/core';
import { StatService } from '../stat.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats;

  constructor(private statService: StatService) { }

  ngOnInit() {
    this.stats = this.statService.getStats();
  }

}
