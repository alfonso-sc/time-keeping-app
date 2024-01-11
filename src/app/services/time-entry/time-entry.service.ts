import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';
import { TimeEntry } from '../../interfaces/time-entry';
import { TIME_ENTRIES } from '../../mock-time-entries';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  constructor(private messageService: MessageService) { }

  getTimeEntries(): Observable<TimeEntry[]> {
    this.messageService.add("TimeEntryService: fetched time entries");
    const timeEntries = of(TIME_ENTRIES)
    return timeEntries

  }
}
