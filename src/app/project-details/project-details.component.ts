import { Component, Input } from '@angular/core';
import { Project } from '../interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project/project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  @Input() project?: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id)
      .subscribe((project) => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

}
