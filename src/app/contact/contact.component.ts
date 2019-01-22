import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm = this.fb.group({
        name:[''],
        email:[''],
        text:[''],
    });

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit() {
    
    }
    title = "Contact";
    background = " url('assets/images/contact-bg.jpg')";
    function($) {
        'use strict';

        // Main Navigation
        $('.hamburger-menu').on('click', function () {
            $(this).toggleClass('open');
            $('.site-navigation').toggleClass('show');
        });

        // Hero Slider
        var swiper = new Swiper('.hero-slider', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    };

    onSubmit(){}

}
