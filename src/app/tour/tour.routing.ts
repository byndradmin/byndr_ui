import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour.component';
import { TourPopupComponent } from './tour-popup/tour-popup.component';
import { TourSpreadComponent } from './tour-spread/tour-spread.component';

const tourRoutes: Routes = [
    {
        path: '',
        component: TourComponent,
        children: [
            {
                path: 'popup',
                component: TourPopupComponent,
            },
            {
                path: 'spread',
                component: TourSpreadComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild ( tourRoutes)],
    exports: [RouterModule]
})
export class TourRoutingModule { }
