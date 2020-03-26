import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FakerDataService } from './fake-data.service';

// Models
import BookingInfo from '../../shared/models/booking-info-list/booking-info-list.model';

@Injectable({
  providedIn: 'root',
})
export class BookingInfoListService {
  isBookingInfoListSet = new BehaviorSubject(false);
  bookingInfoList: BookingInfo[];

  constructor(private faker: FakerDataService) {
    this.setBookingInfoList();
  }

  public getBookingInfoList(formData?) {
    return this.bookingInfoList;
  }

  public setBookingInfoList() {
    this.bookingInfoList = [];

    for (let i = 0; i < 15; i++) {
      const bookingInfo: BookingInfo = this.faker.fakeData(i);
      this.bookingInfoList.push(bookingInfo);
    }

    this.isBookingInfoListSet.next(true);
  }
}
