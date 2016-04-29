import {Component, Input} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'employment-component',
  templateUrl: 'app//employment-component/employment-component.html',
  styleUrls: ['app//employment-component/employment-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class EmploymentComponent {
  @Input() period: String;
  @Input() company: String;
  @Input() position: String;
  @Input() description: String;

  constructor() {}

}
