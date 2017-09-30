import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListItemComponent } from './list-item.component';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent
  ],
  providers: [],
})
export class ListItemModule { }
