import {Component} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {Language, ResService} from '../res-service/res-service';
import {LanguageComponent} from '../language-component/language-component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'language-list',
  templateUrl: 'app//language-list/language-list.html',
  styleUrls: ['app//language-list/language-list.css'],
  providers: [],
  directives: [SectionComponent, LanguageComponent,
  MD_CARD_DIRECTIVES],
  pipes: []
})
export class LanguageList {
  languages: Language[];

  constructor(_resService: ResService) {
    this.languages = _resService.getSampleResume().languages;
  }

}
