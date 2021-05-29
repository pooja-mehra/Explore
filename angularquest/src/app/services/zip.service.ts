import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zip } from '../data/zip';

const baseUrl = 'http://localhost:4567/states/';
@Injectable({
  providedIn: 'root'
})

export class ZipService {
 constructor(private http: HttpClient) { }
getAll(zipCode:string): Observable<Zip> {
    return this.http.get<Zip>(baseUrl+zipCode);
  }
}
