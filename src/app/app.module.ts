import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FarmComponent } from './farm/farm.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StoreComponent } from './store/store.component';
import { ItemComponent } from './item/item.component';
import { PlotComponent } from './plot/plot.component';
import { ToolsComponent } from './tools/tools.component';
import { StatsComponent } from './stats/stats.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    InventoryComponent,
    StoreComponent,
    ItemComponent,
    PlotComponent,
    ToolsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'inventory', component: InventoryComponent },
      { path: 'farm/:id', component: FarmComponent },
      { path: 'store', component: StoreComponent },
      { path: '**', redirectTo: 'farm/1'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
