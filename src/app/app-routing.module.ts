import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ContentComponent } from './content/content.component';
import {HomeComponent} from "./home/home.component";
import { ScienceComponent } from "./science/science.component";
import { HealthComponent } from "./health/health.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { SportsComponent } from './sports/sports.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technology', component: ContentComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'health', component: HealthComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'bitcoin', component: BitcoinComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
