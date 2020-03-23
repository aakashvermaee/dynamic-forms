import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
  public bookingInfoLists: FormArray;

  constructor(
    private fb: FormBuilder,
    private bookingInfoListService: BookingInfoListService
  ) {
    this.initFormGroup();
  }
  
  get BookingInfoListsFormValue() {
    return this.bookingInfoLists.value;
  }

  ngOnInit() {
    this.bookingInfoListService.isBookingInfoListSet.subscribe(res => {
      if (res) {
        this.getBookingInfoList();
      }
    });
  }

  initFormGroup() {
    this.bookingInfoLists = this.fb.array([]);
  }

  createBookingInfoForm(bookingInfo?) {
    return this.fb.group(bookingInfo ? bookingInfo : BookingInfo);
  }

  addBookingInfo(bookingInfo?) {
    this.bookingInfoLists = this.bookingInfoLists as FormArray;
    this.bookingInfoLists.push(this.createBookingInfoForm(bookingInfo));
  }

  getBookingInfoList() {
    const newValues = this.bookingInfoListService.getBookingInfoList(this.BookingInfoListsFormValue);

    for (let bookingInfo of newValues) {
      this.addBookingInfo(bookingInfo);
    }
    // console.log(this.bookingInfoLists)
  }
}
