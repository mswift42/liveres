import {Component, Input} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'skill-component',
  templateUrl: 'app//skill-component/skill-component.html',
  styleUrls: ['app//skill-component/skill-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class SkillComponent {
  @Input() title: String;
  @Input() level: String;
  @Input() details: String[];  

  constructor() {}

}
