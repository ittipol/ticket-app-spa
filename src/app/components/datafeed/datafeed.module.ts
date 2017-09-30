import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Component
import { DatafeedComponent } from './datafeed.component';
// Module
import { ListItemModule } from '../list-item/list-item.module';
// Service
import { DatafeedService } from '../../services/datafeed/datafeed.service';

@NgModule({
  declarations: [
    DatafeedComponent
  ],
  imports: [
    CommonModule,
    ListItemModule,
    HttpClientModule
  ],
  exports: [
    DatafeedComponent
  ],
  providers: [DatafeedService],
})
export class DatafeedModule { }
