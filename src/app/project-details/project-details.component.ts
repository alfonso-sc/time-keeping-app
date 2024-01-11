import { Component, Input } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  @Input() project?: Project;

}
