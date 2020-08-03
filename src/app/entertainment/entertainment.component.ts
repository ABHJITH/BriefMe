import { Component, OnInit } from '@angular/core';
import { TechblogApiService } from '../techblog-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainment: object;
  entertainmentNews: object;
  showEntertainmentNews() {
    this.techblogService.getEntertainmentNews()
      .subscribe((entertainment: any) => {
        this.entertainment = entertainment;
        this.entertainmentNews = entertainment.articles;

      })
  }
  constructor(private techblogService: TechblogApiService) {
    this.showEntertainmentNews();
  }

  ngOnInit(): void {
  }

}

