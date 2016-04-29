import {Component} from 'angular2/core';
import {SectionComponent} from '../section-component/section-component';
import {AwardComponent} from '../award-component/award-component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {Award, ResService} from '../res-service/res-service';


@Component({
  selector: 'award-list',
  templateUrl: 'app//award-list/award-list.html',
  styleUrls: ['app//award-list/award-list.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES, AwardComponent,
  SectionComponent],
  pipes: []
})
export class AwardList {
  awards: Award[];

  constructor(_resService: ResService) {
    this.awards = _resService.getSampleResume().awards;
  }

}
