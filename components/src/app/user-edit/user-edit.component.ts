import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  currentUser: User = new User();

  @Input() set user(value: User) {
    this.currentUser = Object.assign({}, value);
  }
  @Output() updated: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.updated.emit(this.currentUser);
  }

}
