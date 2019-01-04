import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  title = "About me";
  background=" url('assets/images/aboutbg.jpg')";
  constructor() { }

  ngOnInit() {
  }

}
