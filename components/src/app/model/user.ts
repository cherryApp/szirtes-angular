export class User {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: 'Male' | 'Female';
  city?: string;
  address?: string;
  active: boolean = true;
}
