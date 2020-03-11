import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { BeerService } from 'src/app/service/beer.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  list$ = this.beerService.watcher$;
  cols = this.config.beerColumns.map( col => col.key );
  dataSub: Subscription;
  pageSizes = [5, 10, 25, 100];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private beerService: BeerService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.beerService.getAll();
    this.dataSource.paginator = this.paginator;
    this.dataSub = this.beerService.watcher$.subscribe(
      data => this.dataSource.data = data
    );
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
