import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './my-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
// Import any additional FullCalendar plugins here if needed
import dayGridPlugin from '@fullcalendar/daygrid';  
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';


const routes: Routes = [
  { path: '', component: CalendarComponent }
];


@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FullCalendarModule
  ],
  declarations: [CalendarComponent],
  exports: [RouterModule, FullCalendarModule]
})
export class MyCalendarModule { }
