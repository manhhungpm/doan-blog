import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Hero Slider
    var swiper = new Swiper('.hero-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
          el: '.swiper-pagination'
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      }
  });
  }

  function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    

};

}
