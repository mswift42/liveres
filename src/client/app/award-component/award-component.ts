import {Component, Input} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  selector: 'award-component',
  templateUrl: 'app//award-component/award-component.html',
  styleUrls: ['app//award-component/award-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class AwardComponent {
  @Input() title: String;
  @Input() awarded: String;
  @Input() description: String;

  constructor() {}

}
