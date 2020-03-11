import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl = `http://localhost:3000`;

  userColumns: Array<IColumn> = [
    {key: 'id', title: '#'},
    {key: 'last_name', title: 'Lastname'},
    {key: 'first_name', title: 'Firstname'},
    {key: 'email', title: 'Email'},
    {key: 'gender', title: 'Gender', hidden: true},
    {key: 'city', title: 'City'},
    {key: 'address', title: 'Address'},
  ];

  beerColumns: Array<IColumn> = [
    {key: 'id', title: '#'},
    {key: 'name', title: 'Name', pattern: '^[A-Z]{1}.{3,20}$', errorMessage: 'The value must be minimum 4 and maximum 21 character length.'},
    {key: 'strongness', title: 'Strong'},
    {key: 'volume', title: 'Vol.', controlType: 'select',
      options: ['0.33', '0.5', '0.7', '1.0', '5.0']},
    {key: 'manufacturer', title: 'Man.', hidden: true},
    {key: 'price', title: 'Price'},
    {key: 'actions', title: 'Actions'},
  ];

  constructor() { }
}

interface IColumn {
  key: string;
  title: string;
  hidden?: boolean;
  pattern?: string;
  errorMessage?: string;
  controlType?: string;
  options?: string[];
}
