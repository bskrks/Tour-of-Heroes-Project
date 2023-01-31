import { Component } from '@angular/core';
import { HeroInterface } from '../heroInterface';
import { heroesData } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: HeroInterface[] = [];  // for binding mock array
  selectedHero?: HeroInterface;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  
}