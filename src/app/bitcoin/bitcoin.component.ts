import { Component, OnInit } from '@angular/core';
import { TechblogApiService } from '../techblog-api.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  bitcoin: object;
  bitcoinNews: object;
  showBitcoinNews() {
    this.techblogService.getBitcoinNews()
      .subscribe((bitcoin: any) => {
        this.bitcoin =bitcoin;
        this.bitcoinNews = bitcoin.articles;
        
      })
  }
  constructor(private techblogService: TechblogApiService) {
    this.showBitcoinNews();
  }

  ngOnInit(): void {
  }

}
