import { Routes, RouterModule } from '@angular/router';
 
const appRoutes: Routes = [

 		{ path: '', loadChildren: "./pages/concert/concert.module#ConcertModule" },
 		{ path: 'concert', loadChildren: "./pages/concert/concert.module#ConcertModule" },
 		{ path: 'travel', loadChildren: "./pages/travel/travel.module#TravelModule" },
 		// { path: 'voucher', loadChildren: "./pages/voucher/voucher.module#VoucherModule" },

    // otherwise redirect to home
    // { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);