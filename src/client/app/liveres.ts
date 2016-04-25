import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {ResumeCat} from './resume-cat/resume-cat';
import {SidenavCategory, SidenavService} from './sidenavservice/sidenavservice';
import {Resume, ResService, Contact} from './res-service/res-service';
import {ContactComponent} from './contact-component/contact-component';

@Component({
  selector: 'liveres-app',
  providers: [ROUTER_PROVIDERS, SidenavService, ResService],
  templateUrl: 'app/liveres.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MD_SIDENAV_DIRECTIVES,
                 MD_LIST_DIRECTIVES, MdButton, ResumeCat,ContactComponent],
                 styleUrls: ['app/liveres.css'],
  pipes: []
})
@RouteConfig([
])
export class LiveresApp {
  cats: SidenavCategory[];
  sampleres: Resume;
  contact: Contact;
  constructor(sidenavservice: SidenavService,resservice: ResService) {
    this.cats = sidenavservice.getCategories();
    this.contact = resservice.getSampleResume().contact;
  }
}
