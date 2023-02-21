import { Component } from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../models/event";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  events?: Event[];

  constructor(private eventsService:EventsService) {
  }



  // editEvent(){
  //
  //   this.eventsService.updateEvent(event)
  // }



}
