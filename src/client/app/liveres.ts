import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {ResumeCat} from './resume-cat/resume-cat';

@Component({
  selector: 'liveres-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/liveres.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_SIDENAV_DIRECTIVES,
                 MD_LIST_DIRECTIVES, MdButton, ResumeCat],
                 styleUrls: ['app/liveres.css'],
  pipes: []
})
@RouteConfig([
])
export class LiveresApp {
  defaultMeaning: number = 42;
  categories: String[] = ["profile", "projects", "employment", "education", "awards"];

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
