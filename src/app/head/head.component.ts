import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  searchForm = this.fb.group({
    keyword:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){}

}
