import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person.model';
import {Observable} from 'rxjs';

@Injectable()
export class PersonService {

  private dataUrl = '../../assets/data/response.json';

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Person[]> {
    return this.http.get<Person[]>(this.dataUrl);
  }
}
