import { Component, Input } from '@angular/core';
import { HeroInterface } from '../heroInterface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input()
  hero?: HeroInterface; 

}
