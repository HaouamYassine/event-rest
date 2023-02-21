import {Component, Injectable, OnInit} from '@angular/core';
import {Event} from "../../models/event";
import {EventsService} from "../../services/events.service";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})



export class CalendarComponent implements OnInit {

  // clicked = false;
  events?: Event[];
  eventList : any;
  event : any;

  constructor(private eventsService: EventsService, http: HttpClient) {
    this.eventList = [];
    this.event ={
      title: '',
      time: '',
      type: ''
    }; }




  ngOnInit(): void {
    this.eventsService
      .fetchEvents()
      .subscribe(data => {
        this.events = data;
      });
  }


  delEvent(eventId:number) {
    this.eventsService
      .deleteEvent(eventId)
      .subscribe()
    ;
    location.reload();



      }

  // sortByType(eventId:) {}

  editEvent(eventId:number) {
    //ouvrir le form en chargeant avec un get
    // this.clicked = true;
    let body = this.event;
    //const body= this.eventsService.getById(eventId);
    body= this.eventsService.getById(eventId);
      this.eventsService
      .updateEvent(eventId, body);
    }






}
