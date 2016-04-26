import {Component} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {Resume, ResService} from '../res-service/res-service';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'about-me',
  templateUrl: 'app//about-me-component/about-me-component.html',
  styleUrls: ['app//about-me-component/about-me-component.css'],
  providers: [],
  directives: [SectionComponent, MD_CARD_DIRECTIVES],
  pipes: []
})
export class AboutMe {
    abouttext: String;

  constructor(resservice: ResService) {
    this.abouttext = resservice.getSampleResume().about;
  }

}
