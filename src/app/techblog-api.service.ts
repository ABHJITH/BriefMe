import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class TechblogApiService {
  getNews(): Observable<ApiResponse[]> {
    const url = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=37ac7ce9d5644b06b0b349efc61ac236';
    return this.http.get<ApiResponse[]>(url);}
 
  getScienceNews():Observable<ApiResponse[]> {
    const scienceUrl ='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=37ac7ce9d5644b06b0b349efc61ac236';
    return this.http.get<ApiResponse[]>(scienceUrl);
  }; 
  getBitcoinNews(): Observable<ApiResponse[]> {
    const bitcoinUrl = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-02-17&sortBy=publishedAt&apiKey=37ac7ce9d5644b06b0b349efc61ac236';
    return this.http.get<ApiResponse[]>(bitcoinUrl);
  };
  getHealthNews(): Observable<ApiResponse[]> {
    const healthUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=37ac7ce9d5644b06b0b349efc61ac236';
    return this.http.get<ApiResponse[]>(healthUrl);
  };
  getSportsNews(): Observable<ApiResponse[]> {
    const sportsUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=37ac7ce9d5644b06b0b349efc61ac236';
    return this.http.get<ApiResponse[]>(sportsUrl);
  };
  getEntertainmentNews(): Observable<ApiResponse[]> {
    const entertainmentUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=37ac7ce9d5644b06b0b349efc61ac236';
    return this.http.get<ApiResponse[]>(entertainmentUrl);
  };
    constructor(private http: HttpClient) { }
}
