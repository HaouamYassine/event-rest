import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./component/calendar/calendar.component";
import {AddEventComponent} from "./component/add-event/add-event.component";
import {UpdateMode} from "@angular/compiler-cli/src/ngtsc/program_driver";
import {EditEventComponent} from "./component/edit-event/edit-event.component";


const routes: Routes = [
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'events', component: CalendarComponent},
  {path: 'events/add', component: AddEventComponent},
  {path: 'events/:id/edit', component: EditEventComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
