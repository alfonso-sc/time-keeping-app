import { Injectable } from '@angular/core';
import { PROJECTS } from '../../mock-projects';
import { Project } from '../../interfaces/project';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    this.messageService.add('ProjectService: fetched projects');
    const projects = of(PROJECTS);
    return projects;
  }

  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find((p) => p.id === id)!;
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(project);
  }
}
