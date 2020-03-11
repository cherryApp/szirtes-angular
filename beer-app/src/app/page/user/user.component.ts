import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ConfigService } from 'src/app/service/config.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  list$ = this.userService.watcher$;
  cols = this.config.userColumns.map( col => col.key );
  dataSub: Subscription;
  pageSizes = [5, 10, 25, 100];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private userService: UserService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSub = this.userService.watcher$.subscribe(
      data => this.dataSource.data = data
    );
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
