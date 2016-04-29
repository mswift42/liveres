import {Component} from 'angular2/core';
import {SkillComponent} from '../skill-component/skill-component';
import {SectionComponent} from '../section-component/section-component';
import {Skill, ResService} from '../res-service/res-service';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'skills-list',
  templateUrl: 'app//skills-list/skills-list.html',
  styleUrls: ['app//skills-list/skills-list.css'],
  providers: [],
  directives: [SectionComponent, SkillComponent,
  MD_CARD_DIRECTIVES],
  pipes: []
})
export class SkillsList {
  skilllist: Skill[];

  constructor(_resService: ResService) {
    this.skilllist = _resService.getSampleResume().skills;
  }

}
