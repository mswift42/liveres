import {Component, Input} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  selector: 'education-component',
  templateUrl: 'app//education-component/education-component.html',
  styleUrls: ['app//education-component/education-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class EducationComponent {
  @Input() period: String;
  @Input() institution: String;
  @Input() degree: String;
  @Input() details: String;

  constructor() {}

}
