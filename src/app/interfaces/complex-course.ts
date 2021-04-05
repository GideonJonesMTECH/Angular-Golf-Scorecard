import { Holes } from './holes';

export interface ComplexCourse {
  id: Number;
  name: String;
  addr1: String;
  city: String;
  stateOrProvince: String;
  country: String;
  zipCode: String;
  phone: String;
  website: String;
  thumbnail: String;
  holes: Array<Holes>;
}
