import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

// Services
import { BookingInfoListService } from '../../services/booking-info-list.service';

// Form Model
import BookingInfo from '../../../shared/forms-metadata/booking-info-list/booking-info-list.meta';

// Model
import BookingInfoModel from '../../../shared/models/booking-info-list/booking-info-list.model';

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
    this.initFormGroup();
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

  initFormGroup() {
    this.bookingInfoList = this.fb.array([BookingInfo]);
  }

  /* createBookingInfoForm(bookingInfo?) {
    return this.fb.group(bookingInfo || this.fb.control('', []));
  } */

  addBookingInfo(bookingInfoList?) {
    this.bookingInfoList = this.bookingInfoList as FormArray;

    for (const bookingInfo of bookingInfoList) {
      // this.bookingInfoList.push(new FormGroup(bookingInfo));
      this.bookingInfoList.patchValue(bookingInfo);
    }
  }

  getBookingInfoList() {
    const newValues: BookingInfoModel[] = this.bookingInfoListService.getBookingInfoList(this.BookingInfoListFormValue);

    // this.addBookingInfo(newValues);

    // this.bookingInfoList.patchValue(newValues);

    this.bookingInfoList = this.bookingInfoList as FormArray;
    this.bookingInfoList.setValue(newValues);

    console.log(this.bookingInfoList);
  }
}
