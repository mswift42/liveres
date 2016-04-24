import {Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'section-component',
  templateUrl: 'app//section-component/section-component.html',
  styleUrls: ['app//section-component/section-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class SectionComponent {

  constructor() {}

}
