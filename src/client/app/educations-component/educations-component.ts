import {Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {EducationComponent} from '../education-component/education-component';
import {ResService, Education} from '../res-service/res-service';
import {SectionComponent} from '../section-component/section-component';



@Component({
  selector: 'educations-component',
  templateUrl: 'app//educations-component/educations-component.html',
  styleUrls: ['app//educations-component/educations-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES, EducationComponent,
  SectionComponent],
  pipes: []
})
export class EducationsComponent {
  educations: Education[];

  constructor(_resService: ResService) {
    this.educations = _resService.getSampleResume().education;
  }

}
