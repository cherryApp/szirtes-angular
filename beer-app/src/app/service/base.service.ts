import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export abstract class BaseService {

  apiEndpoint = ``;
  protected entityName = ``;
  watcher$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {}

  getUrl(): string {
    return `${this.config.apiUrl}/${this.entityName}`;
  }

  getAll(): void {
    console.log(this.getUrl());
    this.http.get(this.getUrl()).toPromise().then(
      list => this.watcher$.next((list as any[])),
      err => {
        console.error(err);
        this.watcher$.next([]);
      }
    )
  }

  get(id: number | string): Observable<any> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get(url);
  }

  create(entity: any): Observable<any> {
    return this.http.post(this.getUrl(), entity);
  }

  update(id: number | string, entity: any): Observable<any> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.put(url, entity);
  }

  delete(id: number | string): Observable<any> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.delete(url);
  }

}
