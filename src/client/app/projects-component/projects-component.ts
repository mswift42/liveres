import {Component} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {ResService, Resume, Project} from '../res-service/res-service';
import {ProjectComponent} from '../project-component/project-component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'projects-component',
  templateUrl: 'app//projects-component/projects-component.html',
  styleUrls: ['app//projects-component/projects-component.css'],
  providers: [],
  directives: [SectionComponent, ProjectComponent,
    MD_CARD_DIRECTIVES],
  pipes: []
})
export class ProjectsComponent {
  projects: Project[];

  constructor(_resService: ResService) {
    this.projects = _resService.getSampleResume().projects;
  }

}
