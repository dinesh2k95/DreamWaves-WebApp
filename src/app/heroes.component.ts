import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service'

import {Router} from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {
  }

title = 'List of students';
heroes: Hero[];
selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
  this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes);
      }

  gotoDetail():void {
      this.router.navigate(['/detail', this.selectedHero.id]);
  }
}