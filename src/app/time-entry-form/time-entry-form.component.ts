import { Component } from '@angular/core';
import { TimeEntry } from '../interfaces/time-entry';
import { UserService } from '../services/user/user.service';
import { User } from '../interfaces/user';
import { Project } from '../interfaces/project';
import { ProjectService } from '../services/project/project.service';
import { TimeEntryService } from '../services/time-entry/time-entry.service';

@Component({
  selector: 'app-time-entry-form',
  templateUrl: './time-entry-form.component.html',
  styleUrl: './time-entry-form.component.css'
})
export class TimeEntryFormComponent {

  users: User[] = [];
  projects: Project[] = [];
  model: TimeEntry = new TimeEntry(NaN, new Date(0), NaN, NaN, NaN, "");

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private timeEntryService: TimeEntryService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getProjects();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (users) => this.users = users
      );
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(
        (projects) => this.projects = projects
      );
  }

  onSubmit() {
    this.timeEntryService.addEntries(this.model)
      .subscribe(
        (_) => this.newTimeEntry()
      );
  }

  newTimeEntry() {
    this.model = new TimeEntry(NaN, new Date(0), NaN, NaN, NaN, "");
  }
}








