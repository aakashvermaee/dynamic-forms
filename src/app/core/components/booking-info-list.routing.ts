import { Routes, RouterModule } from '@angular/router';
import { BookingInfoListComponent } from './booking-info-list/booking-info-list.component';
import { NgModule } from '@angular/core';

export const bookingRoutes = [
  {
    path: 'bookinginfolist',
    component: BookingInfoListComponent,
    children: [],
  },
];
@NgModule({
  imports: [RouterModule.forChild(bookingRoutes)],
  exports: [RouterModule],
})
export class BookingInfoListRoutingModule { }
