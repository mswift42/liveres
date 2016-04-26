import {Component, Input} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'project-component',
  templateUrl: 'app//project-component/project-component.html',
  styleUrls: ['app//project-component/project-component.css'],
  providers: [],
  directives: [SectionComponent, MD_CARD_DIRECTIVES],
  pipes: []
})
export class ProjectComponent {
  @Input() title: String;
  @Input() description: String;
  @Input() screenshot: String;

  constructor() {}

}
