import {Component} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {ResService, Resume, Project} from '../res-service/res-service';
import {ProjectComponent} from '../project-component/project-component';


@Component({
  selector: 'projects-component',
  templateUrl: 'app//projects-component/projects-component.html',
  styleUrls: ['app//projects-component/projects-component.css'],
  providers: [],
  directives: [SectionComponent, ProjectComponent],
  pipes: []
})
export class ProjectsComponent {
  projects: Project[];

  constructor(_resService: ResService) {
    this.projects = _resService.getSampleResume().projects;
  }

}
