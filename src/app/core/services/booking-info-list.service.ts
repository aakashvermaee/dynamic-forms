import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import faker from 'faker';

@Injectable({
  providedIn: 'root',
})
export class BookingInfoListService {
  isBookingInfoListSet = new BehaviorSubject(false);
  bookingInfoList;

  constructor() {
    this.setBookingInfoList();
  }

  public getBookingInfoList(formData?) {
    return this.bookingInfoList;
  }

  public setBookingInfoList() {
    this.bookingInfoList = [];

    for (let i = 0; i < 10; i++) {
      const bookingInfo = { id: i, ...this.fakeData() };

      this.bookingInfoList.push(bookingInfo);
    }

    this.isBookingInfoListSet.next(true);
  }

  private fakeData() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.firstName(),
      dateOfBirth: '11-16-2020',
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  }
}