import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingInfoListComponent } from './booking-info-list/booking-info-list.component';
import { SharedModule } from '../../shared/shared.module';

import { BookingInfoListRoutingModule } from './booking-info-list.routing';

@NgModule({
  imports: [
    BookingInfoListRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [BookingInfoListComponent],
  declarations: [
    BookingInfoListComponent
  ]
})
export class BookingInfoListModule { }
