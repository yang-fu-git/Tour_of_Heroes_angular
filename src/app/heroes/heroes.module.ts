import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroPluginHostComponent } from '../hero-plugin-host/hero-plugin-host.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [HeroesComponent,HeroPluginHostComponent]
})
export class HeroesModule { }