import {Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {ResService, Employment} from '../res-service/res-service';
import {EmploymentComponent} from '../employment-component/employment-component';
import {SectionComponent} from '../section-component/section-component';


@Component({
  selector: 'employment-list',
  templateUrl: 'app//employment-list/employment-list.html',
  styleUrls: ['app//employment-list/employment-list.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES, EmploymentComponent,
  SectionComponent],
  pipes: []
})
export class EmploymentList {
  employmentlist: Employment[];

  constructor(_resService: ResService) {
    this.employmentlist = _resService.getSampleResume().employment;
   }

}
