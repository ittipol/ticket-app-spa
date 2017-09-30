import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { routing } from './travel.routing';
import { TravelComponent } from './travel.component';
import { DatafeedModule } from '../../components/datafeed/datafeed.module';
import { ContentPanelModule } from '../../components/content-panel/content-panel.module';

@NgModule({
  declarations: [
    TravelComponent
  ],
  imports: [
    CommonModule,
    routing,
    DatafeedModule,
    ContentPanelModule
  ],
  providers: [],
})
export class TravelModule { }
