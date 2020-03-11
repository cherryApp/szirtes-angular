import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  list$ = this.userService.watcher$;
  cols = this.config.userColumns.map( col => col.key );

  constructor(
    private userService: UserService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

}
