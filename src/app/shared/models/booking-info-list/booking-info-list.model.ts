export default interface BookingAndHotel {
  booking: BookingDetails
}

export interface BookingDetails {
  id: string;
  arrival_time: number;
  departure_time: number;
  check_in_time: number;
  pre_check_in_status: string;
  check_in_status: string;
  booking_status: string;
  card_details: CardDetails;
  primary_guest?: (GuestsEntity) | null;
  accompany_guests?: (GuestsEntity)[] | null;
  shared_guests?: (GuestsEntity)[] | null;
  face_recognition_guest_id?: null;
  pay_at_desk: boolean;
  confirmation_number?: string;
  steps_completed: number;
  special_amenities: (SpecialAmenities)[] | null;
  special_remarks: string;
  room?: (RoomEntity)[] | null;
  room_inclusion: (RoomInclusion)[] | null;
  flight_details: FlightDetails;
  kids?: [];
  no_of_kids: number;
}

export interface RoomInclusion {
  inclusion: string;
}

export interface SpecialAmenities {
  id: string;
  amenity: string;
  rate: number;
  quantity: number;
  package_code: string;
  start_date: number;
  end_date: number;
  booking_id: string;
}

export interface GuestUploads {
  id: string;
  document_number: string;
  document_type: string;
  issue_place: string;
  issue_date: number;
  front_url?: string | null;
  back_url?: string | null;
  signature_url?: null;
}

export interface FlightDetails {
  id: string;
  number: string;
  date: number;
  arrival_time: number;
  departure_time: number;
  arrival_transportation_required: boolean;
  departure_transportation_required: boolean;
}


export interface RoomEntity {
  id: string;
  type: string;
  room_number: number;
  room_rate: number;
  room_status: string;
}

export interface CardDetails {
  id: string;
  number: number;
  holder_name: string;
  expiry_date: string;
}

export interface GuestsEntity {
  id: string;
  isd_code: number;
  contact_number: string;
  email_id: string;
  first_name: string;
  last_name: string;
  title: string;
  nationality: string;
  is_vip: boolean;
  guest_uploads: GuestUploads;
  date_of_birth: number;
  document_name_validation?: null;
  document_image_validation?: null;
  image_url?: string | null;
  address: Address;
}

export interface Address {
  id: string;
  city: string;
  country: string;
}

export interface DocumentTypeI {
  type: string
}

export interface PersonalInfoI {
  id: string;
  title: string;
  nationality: string;
  frro: boolean;
  vip: boolean;
  first_name: string;
  last_name: string;
  is_vip: boolean;
  guest_uploads?: GuestUploads;
  date_of_birth: number;
  is_frro: boolean;
  isd_code: number;
  contact_number: string;
  email_id: string;
  address: Address;
  signature_url?: string;
  regcard_url?: string;
  image_url?: string;
  booking_id: string;
}

export interface PersonalInfoFormGroupI {
  date_of_birth: number;
  id: string;
  first_name: string;
  last_name: string;
  email_id: string;
  isd_code: number;
  contact_number: string;
  title: string;
}

export interface StayDetailsI {
  id: string;
  arrival_time: number;
  departure_time: number;
  check_in_time: number;
  pre_check_in_status: string;
  check_in_status: string;
  booking_status: string;
  card_details: CardDetails;
  primary_guest?: (GuestsEntity) | null;
  accompany_guests?: (GuestsEntity)[] | null;
  shared_guests?: (GuestsEntity)[] | null;
  face_recognition_guest_id?: null;
  pay_at_desk: boolean
  confirmation_number?: string;
  steps_completed: number;
  special_amenities: (SpecialAmenities)[] | null;
  special_remarks: string;
  room?: (RoomEntity)[] | null;
  room_inclusion: (RoomInclusion)[] | null;
  flight_details: FlightDetails;
  kids?: [];
  no_of_kids: number
}

export interface ImageUploadResponseI {
  file_download_url: string;
  file_name: string;
  file_type: string;
  size: string
}

export interface UploadDocI {
  id: string;
  arrival_time: number;
  departure_time: number;
  check_in_time: number;
  pre_check_in_status: string;
  check_in_status: string;
  booking_status: string;
  card_details: CardDetails;
  primary_guest?: (GuestsEntity) | null;
  accompany_guests?: (GuestsEntity)[] | null;
  shared_guests?: (GuestsEntity)[] | null;
  face_recognition_guest_id?: null;
  pay_at_desk: boolean
  confirmation_number?: string;
  steps_completed: number;
  special_amenities: (SpecialAmenities)[] | null;
  special_remarks: string;
  room?: (RoomEntity)[] | null;
  room_inclusion: (RoomInclusion)[] | null;
  flight_details: FlightDetails;
  kids?: [];
  no_of_kids: number
}

export interface GuestDetailsCustomI {
  primary_guest?: [];
  secondary_guests?: []
}

export interface GuestStayDetailsCustomI {
  id?: string;
  arrivalDate?: Date | '';
  departureDate?: Date | '';
  checkInTime?: Date;
  timezone?: string;
  adultsCount?: number;
  kidsCount?: number
}

export interface CardDetailsCustomI {
  id?: string;
  number?: string | number;
  holder_name?: string;
  expiry_date?: string;
  paymentType?: string
}

export interface UpdatedStayDetailsCustomI {
  arrival_date?: number;
  departure_date?: number;
  check_in_time?: number;
  id?: string;
  time_zone?: string;
  no_of_adults?: number;
  no_of_children?: number;
}

export interface PrefrencesCustomI {
  bookingId?: string;
  room_rate?: number | string | null;
  roomType?: string | null;
  room_inclusions?: string | null;
  special_amenities?: string | null;
  special_remarks?: string | null;
  number?: string | null;
  date?: Date | ''
}

export interface GuestDsCustomI {
  id?: string;
  guests?: (GuestFGCustomI)[]
}

interface GuestFGCustomI {
  id?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date | '';
  nationality?: string;
  title?: string;
  docType?: string;
  frontURL?: string;
  backURL?: string;
  placeOfIssue?: string;
  imgURL?: string;
  isSkip?: boolean;
  visaURL?: string;
}

export interface PersonalInfoCustomI {
  date_of_birth?;
  id?: string;
  first_name?: string;
  last_name?: string;
  email_id?: string;
  isd_code?: string;
  contact_number?: string
}