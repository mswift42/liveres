import {Component, Input} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'language-component',
  templateUrl: 'app//language-component/language-component.html',
  styleUrls: ['app//language-component/language-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class LanguageComponent {
  @Input() lang: String;
  @Input() level: String;

  constructor() {}

}
