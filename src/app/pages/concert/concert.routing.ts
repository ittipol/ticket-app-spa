import { Routes, RouterModule } from '@angular/router';

import { ConcertComponent } from './concert.component';
 
const appRoutes: Routes = [
    { path: '', component: ConcertComponent },
];
 
export const routing = RouterModule.forChild(appRoutes);