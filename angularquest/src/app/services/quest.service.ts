import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../data/topic';
import { Quest } from '../data/quest';


const baseUrl = 'http://localhost:4567';
@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(baseUrl+"/quests");
  }

  create(data: any): Observable<Quest[]> {
    return this.http.post<Quest[]>(baseUrl+"/add" , data);
  }
}
