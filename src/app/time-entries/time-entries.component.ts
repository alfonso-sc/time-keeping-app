import { Component } from '@angular/core';
import { TimeEntry } from '../interfaces/time-entry';
import { TimeEntryService } from '../services/time-entry/time-entry.service';

@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.component.html',
  styleUrl: './time-entries.component.css'
})
export class TimeEntriesComponent {
  timeEntries: TimeEntry[] = [];

  constructor(private timeEntryService: TimeEntryService) { }

  ngOnInit(): void {
    this.getTimeEntries();
  }

  getTimeEntries(): void {
    this.timeEntryService.getTimeEntries()
      .subscribe(
        (time_entries) => this.timeEntries = time_entries
      );
  }

}
