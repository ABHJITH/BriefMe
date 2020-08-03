import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TechblogApiService } from './techblog-api.service';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';  
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BitcoinComponent,
    SportsComponent,
    HealthComponent,
    EntertainmentComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
    
  ],
  providers: [TechblogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
