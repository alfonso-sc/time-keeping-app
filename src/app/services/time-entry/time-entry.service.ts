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

  _incrementId(): number {
    const maxId: number = Math.max.apply(
      null,
      TIME_ENTRIES.map((entry) => entry.id)
    )
    return maxId + 1;
  }

  getTimeEntries(): Observable<TimeEntry[]> {
    this.messageService.add("TimeEntryService: fetched time entries");
    const timeEntries = of(TIME_ENTRIES)
    return timeEntries

  }

  addEntries(timeEntry: TimeEntry): Observable<TimeEntry[]> {
    timeEntry.id = this._incrementId();
    TIME_ENTRIES.push(timeEntry);
    this.messageService.add(`TimeEntryService: added new time entry id: ${timeEntry.id}`);
    const timeEntries = of(TIME_ENTRIES)
    return timeEntries
  }

}
