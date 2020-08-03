import { Component, OnInit } from '@angular/core';
import { TechblogApiService } from '../techblog-api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  health: object;
  healthNews: object;
  showHealthNews() {
    this.techblogService.getHealthNews()
      .subscribe((health: any) => {
        this.health= health;
        this.healthNews = health.articles;
        

      })
  }
  constructor(private techblogService: TechblogApiService) {
    this.showHealthNews();
  }

  ngOnInit(): void {
  }

}
