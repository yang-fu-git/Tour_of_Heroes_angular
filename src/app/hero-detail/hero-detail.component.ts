import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor( // inject services into the contructor
    private route: ActivatedRoute, //route to this instance of the HeroDetailComponent
    private heroService: HeroService, //gets hero data from the remote server and this component uses it to get the hero-to-display.
    private location: Location //Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void { //???? what's the use of this 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  /**
   * navigates backward one step in the browser's history stack using the Location service
   */
  goBack(): void {
    this.location.back();  
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
  // setUppercaseName()

}