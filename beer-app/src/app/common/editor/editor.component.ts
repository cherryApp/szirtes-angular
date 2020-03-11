import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from 'src/app/service/beer.service';
import { ConfigService } from 'src/app/service/config.service';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  formData: any = {};
  cols = this.config.beerColumns.filter(
    item => !['id', 'actions'].includes(item.key)
  );

  constructor(
    private ar: ActivatedRoute,
    private dataService: BeerService,
    private config: ConfigService,
    private router: Router,
  ) {
    this.ar.params.pipe( switchMap( (params: {id: string}) => {
      return this.dataService.get(params.id);
    }) ).subscribe(
      beer => this.formData = beer
    );
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.dataService.update(this.formData.id, form.value).toPromise()
      .then(
        resp => this.router.navigateByUrl('/beer'),
        err => console.error(err)
      );
  }

}
