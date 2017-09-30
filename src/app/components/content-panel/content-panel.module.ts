import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentPanelComponent } from './content-panel.component';

@NgModule({
  declarations: [
    ContentPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentPanelComponent
  ],
  providers: [],
})
export class ContentPanelModule { }
