import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl = `http://localhost:3000`;

  userColumns: Array<{key: string, title: string, hidden?: boolean}> = [
    {key: 'id', title: '#'},
    {key: 'last_name', title: 'Lastname'},
    {key: 'first_name', title: 'Firstname'},
    {key: 'email', title: 'Email'},
    {key: 'gender', title: 'Gender', hidden: true},
    {key: 'city', title: 'City'},
    {key: 'address', title: 'Address'},
  ];

  constructor() { }
}
