import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = ``;
  watcher$: BehaviorSubject<any> = new BehaviorSubject([]);
  testObservable: Observable<number> = new Observable( observer => {
    fetch(this.apiUrl).then(response => response.json()).then(data => {
      observer.next(data);
    });
  });

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) {
    this.apiUrl = `${this.config.apiUrl}/users`;
  }

  get(id?: number | string): void {
    const url = !id ? this.apiUrl : `${this.apiUrl}/${id}`;
    this.http.get(url).pipe(
      tap( users => this.watcher$.next(users) )
    ).toPromise().then( () => {} );
  }

  delete(id: number | string): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      tap( () => this.get() )
    ).toPromise();
  }
}
