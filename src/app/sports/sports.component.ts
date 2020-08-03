import { Component, OnInit } from '@angular/core';
import { TechblogApiService } from '../techblog-api.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sports: object;
  sportsNews: object;
  showSportsNews() {
    this.techblogService.getSportsNews()
      .subscribe((sports: any) => {
        this.sports = sports;
        this.sportsNews = sports.articles;

      })
  }
  constructor(private techblogService: TechblogApiService) {
    this.showSportsNews();
  }

  ngOnInit(): void {
  }

}
