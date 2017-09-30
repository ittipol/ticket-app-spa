import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { routing } from './concert.routing';
import { ConcertComponent } from './concert.component';
import { DatafeedModule } from '../../components/datafeed/datafeed.module';
import { ContentPanelModule } from '../../components/content-panel/content-panel.module';

@NgModule({
  declarations: [
    ConcertComponent
  ],
  imports: [
    CommonModule,
    routing,
    DatafeedModule,
    ContentPanelModule
  ],
  providers: [],
})
export class ConcertModule { }
