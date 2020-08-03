import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import { TechblogApiService } from '../techblog-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  test:false;
  result: object; 
  articles:object;
  showNews() {
    this.techblogService.getNews()
      .subscribe((result: any) => {
        this.result = result;
        this.articles=result.articles
        console.log(this.articles)
        
        

      })
  }

  constructor(private techblogService: TechblogApiService) {
    this.showNews();
   }

  ngOnInit(): void {
   
  }
  

}
