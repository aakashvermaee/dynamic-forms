import { FormGroup, FormControl, FormArray } from '@angular/forms';

export default new FormGroup({
  booking: new FormGroup({
    id: new FormControl('', []),
    arrival_time: new FormControl(undefined, []),
    departure_time: new FormControl(undefined, []),
    check_in_time: new FormControl(undefined, []),
    pre_check_in_status: new FormControl('', []),
    check_in_status: new FormControl('', []),
    booking_status: new FormControl('', []),
    card_details: new FormGroup({
      id: new FormControl('', []),
      expiry_date: new FormControl('', []),
      holder_name: new FormControl(undefined, []),
      number: new FormControl(0, [])
    }),
    primary_guest: new FormGroup({
      id: new FormControl('', []),
      isd_code: new FormControl(0, []),
      contact_number: new FormControl('', []),
      email_id: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      title: new FormControl('', []),
      nationality: new FormControl('', []),
      is_vip: new FormControl(undefined, []),
      guest_uploads: new FormGroup({
        id: new FormControl('', []),
        document_number: new FormControl('', []),
        document_type: new FormControl('', []),
        front_url: new FormControl('', []),
        back_url: new FormControl('', []),
        signature_url: new FormControl('', []),
        issue_date: new FormControl(undefined, []),
        issue_place: new FormControl('', [])
      }),
      address: new FormGroup({
        city: new FormControl('', []),
        id: new FormControl('', []),
        country: new FormControl('', [])
      })
      ,
      date_of_birth: new FormControl(undefined, []),
      image_url: new FormControl('', [])
    }),
    accompany_guests: new FormArray([new FormGroup({
      id: new FormControl('', []),
      isd_code: new FormControl(0, []),
      contact_number: new FormControl(0, []),
      email_id: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      title: new FormControl('', []),
      nationality: new FormControl('', []),
      is_vip: new FormControl(undefined, []),
      guest_uploads: new FormGroup({
        id: new FormControl('', []),
        document_number: new FormControl('', []),
        document_type: new FormControl('', []),
        front_url: new FormControl('', []),
        back_url: new FormControl('', []),
        signature_url: new FormControl('', []),
        issue_date: new FormControl(0, []),
        issue_place: new FormControl('', [])
      }),
      address: new FormGroup({
        city: new FormControl('', []),
        id: new FormControl('', []),
        country: new FormControl('', [])
      }),
      date_of_birth: new FormControl(0, []),
      image_url: new FormControl('', [])
    })]),
    pay_at_desk: new FormControl(undefined, []),
    confirmation_number: new FormControl('', []),
    steps_completed: new FormControl(0, []),
    special_amenities: new FormArray([new FormGroup({
      id: new FormControl('', []),
      amenity: new FormControl('', []),
      rate: new FormControl('', []),
      quantity: new FormControl('', []),
      package_code: new FormControl('', []),
      start_date: new FormControl('', []),
      end_date: new FormControl('', []),
      booking_id: new FormControl('', [])
    })]),
    special_remarks: new FormControl('', []),
    room: new FormArray([new FormGroup({
      id: new FormControl('', []),
      room_number: new FormControl(0, []),
      room_rate: new FormControl(0, []),
      room_status: new FormControl('', []),
      type: new FormControl('', [])
    })
    ]),
    room_inclusion: new FormArray([new FormGroup({
      inclusion: new FormControl('', [])
    })]),
    flight_details: new FormGroup({
      id: new FormControl('', []),
      number: new FormControl(0, []),
      date: new FormControl(0, []),
      arrival_time: new FormControl(0, []),
      departure_time: new FormControl(0, []),
      arrival_transportation_required: new FormControl(undefined, []),
      departure_transportation_required: new FormControl(undefined, [])
    }),
    no_of_kids: new FormControl(0, [])
  }),
  hotel: new FormGroup({
    id: new FormControl('', []),
    address: new FormGroup({
      city: new FormControl('', []),
      id: new FormControl('', []),
      country: new FormControl('', [])
    }),
    image_url: new FormControl('', []),
    name: new FormControl('', []),
    terms_and_conditions: new FormControl('', []),
    timezone: new FormControl('', [])
  })
});
