import { Component } from '@angular/core';
import { HeroInterface } from '../heroInterface';
import { heroesData } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  heroes = heroesData;  // for binding mock array
  selectedHero?: HeroInterface;

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }
}