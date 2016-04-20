import {Component, Input} from 'angular2/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';


@Component({
  selector: 'resume-cat',
  templateUrl: 'app//resume-cat/resume-cat.html',
  styleUrls: ['app//resume-cat/resume-cat.css'],
  providers: [],
  directives: [MD_LIST_DIRECTIVES],
  pipes: []
})
export class ResumeCat {
  @Input() category: String;
  @Input() url: String;
  @Input() icon: String;


  constructor() {}

}
