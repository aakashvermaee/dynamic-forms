import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

// Services
import { BookingInfoListService } from '../../services/booking-info-list.service';

// Model
import BookingInfoModel from '../../../shared/models/booking-info-list/booking-info-list.model';
import BookingInfoListMeta from '../../../shared/forms-metadata/booking-info-list/booking-info-list.meta';

@Component({
  selector: 'app-booking-info-list',
  templateUrl: './booking-info-list.component.html',
  styleUrls: ['./booking-info-list.component.scss']
})
export class BookingInfoListComponent implements OnInit {
  public bookingInfoList: FormArray;

  constructor(
    private fb: FormBuilder,
    private bookingInfoListService: BookingInfoListService
  ) {
    this.initFormArray();
  }

  get BookingInfoListFormValue() {
    return this.bookingInfoList as FormArray;
  }

  ngOnInit() {
    this.bookingInfoListService.isBookingInfoListSet.subscribe(res => {
      if (res) {
        this.getBookingInfoList();
      }
    });
  }

  initFormArray() {
    this.bookingInfoList = this.fb.array([]);
  }

  createBookingInfoForm(bookingInfo?) {
    return this.fb.group(BookingInfoListMeta);
  }

  addBookingInfo(bookingInfoList?: BookingInfoModel[]) {
    this.bookingInfoList = this.bookingInfoList as FormArray;

    for (let i = 0; i < bookingInfoList.length; i++) {
      this.bookingInfoList.push(this.createBookingInfoForm());
    }

    this.bookingInfoList.patchValue(bookingInfoList);
  }

  getBookingInfoList() {
    const newValues: BookingInfoModel[] = this.bookingInfoListService.getBookingInfoList(this.BookingInfoListFormValue);

    this.addBookingInfo(newValues);

    console.log(this.bookingInfoList);
  }
}
