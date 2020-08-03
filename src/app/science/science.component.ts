import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import { TechblogApiService } from '../techblog-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
   science:object;
   scienceNews:object;
   showScienceNews(){
     this.techblogService.getScienceNews()
     .subscribe((science:any)=>{
       this.science=science;
       this.scienceNews=science.articles;
       
      
     })
   }
  constructor(private techblogService: TechblogApiService) {
    this.showScienceNews();
   }

  ngOnInit(): void {
  }

}
