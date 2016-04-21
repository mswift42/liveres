import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {ResumeCat} from './resume-cat/resume-cat';
import {SidenavCategory, SidenavService} from './sidenavservice/sidenavservice';

@Component({
  selector: 'liveres-app',
  providers: [ROUTER_PROVIDERS, SidenavService],
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
  cats: SidenavCategory[];
  constructor(sidenavservice: SidenavService) {
    this.cats = sidenavservice.getCategories();
  }
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
