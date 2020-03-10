import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ConfigService } from '../service/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  list = this.userService.watcher$;
  /* [
    {id: 1, name: 'Charlie Firpo', email: 'cf@gmail.com', active: true},
    {id: 2, name: 'Allen', email: 'allen@gmail.com', active: true},
    {id: 3, name: 'Anulu', email: 'anulu@gmail.com', active: false},
    {id: 4, name: 'Kamaszuka', email: 'kamaszuka@gmail.com', active: true},
  ]; */

  cols = this.config.userColumns;
  selectedUser: User = new User();
  selectedIndex: number = 0;
  listSubscriptin: Subscription;
  phrase = '';
  filterKey = '';

  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    /* this.listSubscriptin = this.userService.watcher$.subscribe(
      users => this.list = (users as User[]),
      err => console.error(err)
    ); */
    this.userService.get();
  }

  ngOnDestroy(): void {
    // this.listSubscriptin.unsubscribe();
  }

  // User to the child component. parent => child
  selectUser(user: User): void {
    this.selectedIndex = this.list.value.indexOf(user);
    this.selectedUser = this.list.value[this.selectedIndex];
  }

  // User from the child component. child => parent
  userUpdated(user: User): void {
    this.list[this.selectedIndex] = Object.assign({}, user);
  }

  // Delete user from the list.
  deleteUser(user: User): void {
    this.userService.delete(user.id).then(
      () => console.log(`Delete request has been succeeded.`),
      err => console.error(err)
      );
      /* const index = this.list.indexOf(user);
      this.list.splice(index, 1); */
    }

  changeOption(event): void {
    /* this.cols.filter( item => item.key === event.target.value )[0]
      .hidden = !event.target.selected; */
  }

  changeColumnVisibility(select: HTMLSelectElement): void {
    let selected: string[] = [];
    for (let col of this.cols) {
      col.hidden = true;
    }

    for (let i = 0; i < select.selectedOptions.length; i++) {
      const val = select.selectedOptions[i].value;
      const colItem = this.cols.filter( item => item.key === val )[0];
      if (colItem) {
        colItem.hidden = false;
      }
    }
  }

}
