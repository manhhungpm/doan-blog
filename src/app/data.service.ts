import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '@angular/compiler';

export interface Blog{
  blogId: number;
  title:string;
  content:string;
  date:string;
  imageUrl: string;
}

//Thêm
export interface Comment{
  commentId:number;
  dateComment:string;
  text:string;
  userId:string;
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  rootURL = "http://localhost:57448/Blog/webresources"
  urlAddComment = "http://localhost:57448/Blog/webresources/edu.nuce.cntt.mht.ltudm.blog.entity.comments"
  urlAllCommentById = "http://localhost:57448/Blog/webresources/edu.nuce.cntt.mht.ltudm.blog.entity.comments/findByBlogId/"
  constructor(private http: HttpClient ) { }

  getBlogList():Observable<Array<Blog>>{
    return this.http.get<Array<Blog>>(this.rootURL+"/blog/all-blog");
  }

  //them
  addComment(comment){
    return this.http.post<Response>(this.urlAddComment,comment,{observe:'response'});
  }
  findCommentByBlogId(id):Observable<Array<Comment>>{
    return this.http.get<Array<Comment>>(this.urlAllCommentById+id);
  }
}
