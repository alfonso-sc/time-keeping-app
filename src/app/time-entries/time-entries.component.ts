import { Component } from '@angular/core';
import { ITimeEntry } from '../interfaces/time-entry';
import { TimeEntryService } from '../services/time-entry/time-entry.service';
import { UserService } from '../services/user/user.service';
import { ProjectService } from '../services/project/project.service';


@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.component.html',
  styleUrl: './time-entries.component.css'
})
export class TimeEntriesComponent {
  timeEntries: ITimeEntry[] = [];

  constructor(
    private timeEntryService: TimeEntryService,
    private userService: UserService,
    private projectService: ProjectService,
  ) { }

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