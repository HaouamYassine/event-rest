import { Component } from '@angular/core';
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  event = {
    title: '',
    time: '',
    type: ''
  };

  constructor(private eventsService:EventsService) {
  }

  editEvent() {
    this.eventsService
      .updateEvent(this.event)
      .subscribe(ok => {
        alert('ok')
      })
  }







}
