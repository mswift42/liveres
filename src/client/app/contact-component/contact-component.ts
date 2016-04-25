import {Component, Input} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';



@Component({
  selector: 'contact-component',
  templateUrl: 'app//contact-component/contact-component.html',
  styleUrls: ['app//contact-component/contact-component.css'],
  providers: [],
  directives: [SectionComponent, MD_CARD_DIRECTIVES],
  pipes: []
})
export class ContactComponent {
  @Input() email: String;
  @Input() phone: String;
  @Input() website: String;

  constructor() {}

}
