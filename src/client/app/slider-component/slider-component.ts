import {Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {ImageComponent} from '../image-component/image-component';
import {SliderImage} from '../slider-service/slider-service';
import {CaptionComponent} from '../caption-component/caption-component';


@Component({
  selector: 'slider-component',
  templateUrl: 'app//slider-component/slider-component.html',
  styleUrls: ['app//slider-component/slider-component.css'],
  providers: [],
  directives: [MD_CARD_DIRECTIVES, ImageComponent,
    CaptionComponent],
  pipes: []
})
export class SliderComponent {
  images: SliderImage[];
  activeIndex: number = 0;

  constructor() { } 
  
  isActiveIndex(i: number) : boolean {
    return i === this.activeIndex;
  }
}
