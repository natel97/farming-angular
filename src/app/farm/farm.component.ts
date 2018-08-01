import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Plot } from '../plot/plot';
import { FarmService } from '../farm.service';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  plots: Plot[];
  selectedIndex = 1;

  constructor(private farmService: FarmService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => of(params.get('id')))).subscribe(console.log);
    this.plots = this.farmService.getFarmPlots();

  }
  changeIndex(event, index) {
    this.selectedIndex = index;
  }

  toggleHelp() {
    document.getElementById('centered-help').classList.toggle('hidden');
  }
}
