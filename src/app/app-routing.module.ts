import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //imports RouterModule and Routes so the application can have routing capability
import { HeroesComponent } from './heroes/heroes.component'; //gives the Router somewhere to go once you configure the routes.
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //navigate to the dashboard automatically,match empty path to the route '/dashboard'
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) }, //colon shows :id is a placeholder for a specific hero id.
];

@NgModule({ //@NgModule metadata initializes the router and starts it listening for browser location changes.

  /* adds the RouterModule to the AppRoutingModule imports array and configures it with the routes
  forRoot() configure the router at the application's root level
  supplies the service providers and directives needed for routing+ performs the initial navigation based on the current browser URL.
   */
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
