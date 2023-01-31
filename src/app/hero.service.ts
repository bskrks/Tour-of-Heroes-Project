import { Injectable } from '@angular/core';
import { HeroInterface } from './heroInterface';
import { heroesData } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<HeroInterface[]> {
    const heroes = of(heroesData);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
