import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService extends BaseService {

  entityName = `beer`;

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
  }
}
