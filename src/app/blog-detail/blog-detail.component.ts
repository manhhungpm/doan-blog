import { Component, OnInit } from '@angular/core';
import {DataService,Blog} from '../data.service'
import {Router, ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id=0;
  b;
  constructor(
    private dataService: DataService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    let blogs;
    this.dataService.getBlogList().subscribe((data:Array<Blog>)=>{
      blogs = data;
      this.b = data.find(obj =>obj.blogId == this.id);
    })
  }

}
