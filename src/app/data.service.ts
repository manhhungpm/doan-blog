import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Blog{
  blogId: number;
  title:string;
  content:string;
  date:string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  rootURL = "http://localhost:57448/Blog/webresources"
  constructor(private http: HttpClient ) { }

  getBlogList():Observable<Array<Blog>>{
    return this.http.get<Array<Blog>>(this.rootURL+"/blog/all-blog");
  }


}
