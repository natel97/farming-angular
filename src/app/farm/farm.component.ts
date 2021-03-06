import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Plot } from '../plot/plot';
import { FarmService } from '../farm.service';
import { switchMap } from 'rxjs/operators';
import { of } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  plots: Plot[];

  constructor(private farmService: FarmService, private route: ActivatedRoute) {}

  farmNo: number;

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => of(params.get('id')))).subscribe((val) => this.farmNo = parseInt(val, 10));
    this.plots = this.farmService.getFarmPlots();

  }

  toggleHelp() {
    document.getElementById('centered-help').classList.toggle('hidden');
  }
}
