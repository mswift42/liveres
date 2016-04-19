import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdSidenav} from '@angular2-material/sidenav';
import {MdList} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';

@Component({
  selector: 'liveres-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/liveres.html',
  directives: [ROUTER_DIRECTIVES, MdToolbar],
  pipes: []
})
@RouteConfig([
])
export class LiveresApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
