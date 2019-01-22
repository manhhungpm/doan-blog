import { Component, OnInit } from '@angular/core';
import {DataService,Blog} from '../data.service'
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  id=0;
  b;
  date="";
  title="";
  content="";
  c;
  comments;
  //them
  commentForm = this.fb.group({
    userName:[''],
    text:[''],
    blogId:['']
  });

  constructor(
    private dataService: DataService,
    private route:ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    $(document).ready(function() {
      $('#summernote').summernote({
        placeholder: 'Nhập nội dung bình luận',
        tabsize: 2,
        height: 100,
        lang: 'vi-VN'
      });
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    let blogs;
    this.dataService.getBlogList().subscribe((data:Array<Blog>)=>{
      blogs = data;
      this.b = data.find(obj => obj.blogId == this.id);
    })

    this.displayComment(this.id);
  }

  onSubmit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    let comment = {userName:"",text:"",blogId:0}

    comment.userName=this.commentForm.value.userName;
    comment.blogId=this.id;
    // comment.text=(String)($('#summernote').summernote('code'));
    comment.text = $($("#summernote").summernote("code")).text()
    let code=0;
    this.dataService.addComment(comment).subscribe(response=>{
      code=response.status;
      console.log("status code:"+code);
      if(code==201){
        this.router.navigate(['/blog-detail',this.id]);
      }
    })
  }

  displayComment(id){
    this.dataService.findCommentByBlogId(id)
    .subscribe((data:Array<Comment>)=>this.comments = data)
  }
  

}
