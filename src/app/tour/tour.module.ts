import { NgModule } from '@angular/core';
import { TourRoutingModule } from './tour.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TourComponent } from './tour.component';
import { TourPopupComponent } from './tour-popup/tour-popup.component';
import { TourSpreadComponent } from './tour-spread/tour-spread.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TourComponent,
    TourPopupComponent,
    TourSpreadComponent
  ],
  imports: [
    TourRoutingModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
  ]
})
export class TourModule { }
