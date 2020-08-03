import { Url } from "url";


export interface ApiResponse {


    status:string,
    totalResults:number,
    articles: JSON,
    source:object,
    id:string,
    name:string,
    author:string,
    title:string,
    description:string,
    url:Url,
    urlToImage:Url,
    publishedAt:Date,
    content:String,
}