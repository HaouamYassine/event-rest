import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../models/event";


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'http://localhost:3000/events';

  fetchEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }

  createEvent(createEvent: any): Observable<void> {
    return this.http.post<void>('http://localhost:3000/events', createEvent);
  }


  deleteEvent(eventId: number):Observable<Event> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.delete<Event>(url);
  }

  updateEvent(event: Event):Observable<Event>{
    const url =`${this.apiUrl}/${event.id}`;
    return this.http.put<event>(url);

  }
}
