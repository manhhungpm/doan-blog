import { Component, OnInit } from '@angular/core';
import {DataService,Blog} from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.displayListBlog();
  }

  displayListBlog(){
    this.dataService.getBlogList()
    .subscribe((data:Array<Blog>)=>this.blogs = data)
  }
  
}
