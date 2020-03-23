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
  public bookingInfoListForm: FormGroup;
  public bookingInfoLists: FormArray;

  constructor(
    private fb: FormBuilder,
    private bookingInfoListService: BookingInfoListService
  ) {
    this.initFormGroup();
  }

  get BookingInfoListFormValue() {
    return this.bookingInfoListForm.get('bookingInfoLists').value;
  }

  ngOnInit() {
    this.bookingInfoListService.isBookingInfoListSet.subscribe(res => {
      if (res) {
        this.getBookingInfoList();
      }
    });
  }

  initFormGroup() {
    this.bookingInfoListForm = this.fb.group({
      bookingInfoLists: this.fb.array([this.createBookingInfoForm()])
    });
  }

  createBookingInfoForm(bookingInfo?) {
    return this.fb.group(bookingInfo ? bookingInfo : BookingInfo);
  }

  addBookingInfo(bookingInfo?) {
    this.bookingInfoLists = this.bookingInfoListForm.get('bookingInfoLists') as FormArray;
    this.bookingInfoLists.push(this.createBookingInfoForm(bookingInfo));
  }

  getBookingInfoList() {
    (this.bookingInfoListForm.get('bookingInfoLists') as FormArray).removeAt(0);

    const newValues = this.bookingInfoListService.getBookingInfoList(this.BookingInfoListFormValue);

    for (let bookingInfo of newValues) {
      this.addBookingInfo(bookingInfo);
    }
  }
}
