import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import faker from 'faker';

// Models
import BookingInfo from '../../shared/forms-metadata/booking-info-list/booking-info-list.meta';
import { FormControl } from '@angular/forms';

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

    for (let i = 0; i < 1; i++) {
      const bookingInfo = this.fakeData(i);

      this.bookingInfoList.push(bookingInfo);
    }

    this.isBookingInfoListSet.next(true);
  }

  private fakeData(id) {
    const bookingInfo: BookingInfo = {
      booking: {
        id: 'CraterZone-101-' + id,
        arrival_time: Math.floor(Date.now() / 1000),
        departure_time: Math.floor(Date.now() / 1000),
        check_in_time: Math.floor(Date.now() / 1000),
        pre_check_in_status: 'PENDING',
        check_in_status: 'PENDING',
        booking_status: 'PENDING',
        card_details: {
          id: 'CARD' + new Date().getFullYear() + id,
          expiry_date: '09/25',
          holder_name: faker.name.firstName(),
          number: 4485452317496833
        },
        primary_guest: {
          id: faker.random.uuid(),
          isd_code: +Math.random().toFixed(2),
          contact_number: faker.phone.phoneNumber(),
          email_id: faker.internet.email(),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          title: faker.name.title(),
          nationality: 'american',
          is_vip: true,
          guest_uploads: {
            id: faker.random.uuid(),
            document_number: faker.random.uuid(),
            document_type: 'passport',
            front_url: faker.image.imageUrl(),
            back_url: faker.image.imageUrl(),
            signature_url: faker.image.imageUrl(),
            issue_date: Math.floor(Date.now() / 1000),
            issue_place: 'USA'
          },
          address: {
            city: faker.address.city(),
            id: faker.random.uuid(),
            country: faker.address.country()
          },
          date_of_birth: Math.floor(Date.now() / 1000),
          image_url: faker.image.imageUrl()
        },
        accompany_guests: [{
          id: faker.random.uuid(),
          isd_code: +Math.random().toFixed(2),
          contact_number: faker.phone.phoneNumber(),
          email_id: faker.internet.email(),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          title: faker.name.title(),
          nationality: 'american',
          is_vip: true,
          guest_uploads: {
            id: faker.random.uuid(),
            document_number: faker.random.uuid(),
            document_type: 'passport',
            front_url: faker.image.imageUrl(),
            back_url: faker.image.imageUrl(),
            signature_url: faker.image.imageUrl(),
            issue_date: Math.floor(Date.now() / 1000),
            issue_place: 'USA'
          },
          address: {
            city: faker.address.city(),
            id: faker.random.uuid(),
            country: faker.address.country()
          },
          date_of_birth: Math.floor(Date.now() / 1000),
          image_url: faker.image.imageUrl()
        }],
        pay_at_desk: true,
        confirmation_number: faker.random.number(),
        steps_completed: 3,
        special_amenities: [{
          id: faker.random.uuid(),
          amenity: 'string',
          rate: 2,
          quantity: 2,
          package_code: 'string',
          start_date: Math.floor(Date.now() / 1000),
          end_date: Math.floor(Date.now() / 1000),
          booking_id: faker.random.uuid()
        }],
        special_remarks: faker.lorem.words(),
        room: [{
          id: faker.random.uuid(),
          room_number: faker.random.number(),
          room_rate: faker.finance.amount(),
          room_status: 'AVAILABLE',
          type: 'BASE'
        }],
        room_inclusion: [{
          inclusion: '2'
        }],
        flight_details: {
          id: faker.random.uuid(),
          number: faker.random.number(),
          date: Math.floor(Date.now() / 1000),
          arrival_time: Math.floor(Date.now() / 1000),
          departure_time: Math.floor(Date.now() / 1000),
          arrival_transportation_required: true,
          departure_transportation_required: false
        },
        no_of_kids: 0
      },
      hotel: {
        id: faker.random.uuid(),
        address: {
          city: faker.address.city(),
          id: faker.random.uuid(),
          country: faker.address.country()
        },
        image_url: faker.image.imageUrl(),
        name: faker.random.words(),
        terms_and_conditions: faker.lorem.sentence(),
        timezone: 'IST'
      }
    };

    const bookingInfoFCObj = this.buildFormControls(bookingInfo);

    return bookingInfoFCObj;
  }

  private buildFormControls(bookingInfoObj) {
    const bookingInfoFCObj = {};

    const iterate = (obj) => {
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
          this.iterateIntoNestedObj(obj, key, bookingInfoFCObj);

          // iterate(obj[key]);
        } else {
          bookingInfoFCObj[key] = new FormControl(obj[key], []);
        }
      });
    }

    iterate(bookingInfoObj);

    // console.log(bookingInfoFCObj);

    return bookingInfoFCObj;
  }

  private iterateIntoNestedObj(sourceObj, key, target) {
    debugger
    // console.log(sourceObj[key]);

    Object.keys(sourceObj[key])
      .forEach(key => {
        console.log(sourceObj[key]);

        target[key] = new FormControl(sourceObj[key], []);
      })
  }
}