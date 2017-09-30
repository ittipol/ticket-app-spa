import { Routes, RouterModule } from '@angular/router';

import { TravelComponent } from './travel.component';
 
const appRoutes: Routes = [
    { path: '', component: TravelComponent },
];
 
export const routing = RouterModule.forChild(appRoutes);