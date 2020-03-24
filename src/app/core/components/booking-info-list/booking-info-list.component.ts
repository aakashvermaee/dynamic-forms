import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

// Services
import { BookingInfoListService } from '../../services/booking-info-list.service';

// Models
import BookingInfo from '../../../shared/forms-metadata/booking-info-list/booking-info-list.meta';

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
    return this.bookingInfoList.value;
  }

  ngOnInit() {
    this.bookingInfoListService.isBookingInfoListSet.subscribe(res => {
      if (res) {
        this.getBookingInfoList();
      }
    });
  }

  initFormGroup() {
    this.bookingInfoList = this.fb.array([]);
  }

  createBookingInfoForm(bookingInfo?) {
    return this.fb.group(bookingInfo || {} as FormControl);
  }

  addBookingInfo(bookingInfo?) {
    this.bookingInfoList = this.bookingInfoList as FormArray;
    // const bookingInfoFG = this.createBookingInfoForm(bookingInfo);
    this.bookingInfoList.push(bookingInfo);
  }

  getBookingInfoList() {
    const newValues = this.bookingInfoListService.getBookingInfoList(this.BookingInfoListFormValue);

    for (let bookingInfo of newValues) {
      this.addBookingInfo(bookingInfo);
    }

    // this.bookingInfoList = this.bookingInfoList as FormArray;

    this.bookingInfoList.patchValue(newValues);

    console.log(this.bookingInfoList);
  }
}
