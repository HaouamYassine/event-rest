import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../models/event";


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventList : any;
  event : any;

  constructor(private http: HttpClient) {
 this.eventList = [];
  this.event ={
    title: '',
    time: '',
    type: ''
  };
  }



  private apiUrl = 'http://localhost:3000/events';

  fetchEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }

  getById(eventId:number):Observable<Event[]> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.get<Event[]>(url);
  }

  createEvent(createEvent: any): Observable<void> {
    return this.http.post<void>('http://localhost:3000/events', createEvent);
  }

  //trier par type
  getByType(type:any){
    return this.http.get('http://localhost:3000/events/?type='+type);
  }

  // saveEvent(eventId: number): Observable<Event> {
  //
  //   const url = `${this.apiUrl}`;
  //   return this.put<Event>().subscribe(e=> this.event=this.getById(eventId))
  // }

  deleteEvent(eventId: number): Observable<Event> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.delete<Event>(url);
  }

  updateEvent(eventId: number, body: Observable<Event>){

    //get the data from our event
    this.http.put<Event>('http://localhost:3000/events',body);

    }


  }
    // generate a form and put our data from event on it


    // button update the data if changed (or not changed)
    // event
    // const url = `${this.apiUrl}/${eventId}`;
    // this.http.get<Event>(url) = eventToUpdate;
    // return this.http.put(Event)(url);
    // return this.http.delete<Event>(url);





