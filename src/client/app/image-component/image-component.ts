import {Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'image-component',
  templateUrl: 'app//image-component/image-component.html',
  styleUrls: ['app//image-component/image-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES],
  pipes: []
})
export class ImageComponent {
  url: String;

  constructor() {}

}
