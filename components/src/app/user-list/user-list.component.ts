import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  list: User[] = [
    {id: 1, name: 'Charlie Firpo', email: 'cf@gmail.com', active: true},
    {id: 2, name: 'Allen', email: 'allen@gmail.com', active: true},
    {id: 3, name: 'Anulu', email: 'anulu@gmail.com', active: false},
    {id: 4, name: 'Kamaszuka', email: 'kamaszuka@gmail.com', active: true},
  ];

  selectedUser: User = new User();
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // User to the child component. parent => child
  selectUser(index: number): void {
    this.selectedIndex = index;
    this.selectedUser = this.list[index];
  }

  // User from the child component. child => parent
  userUpdated(user: User): void {
    this.list[this.selectedIndex] = Object.assign({}, user);
  }

}
