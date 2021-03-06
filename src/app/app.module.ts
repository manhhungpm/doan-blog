import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SliderComponent } from './slider/slider.component';
import { AvaComponent } from './ava/ava.component';
import { BannerComponent } from './banner/banner.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'home' ,component: HomeComponent},
  {path: 'blog-detail/:id', component: BlogDetailComponent},
  {path: 'about-me', component:AboutmeComponent},
  {path: 'contact', component:ContactComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutmeComponent,
    BlogDetailComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    PageNotFoundComponent,
    SliderComponent,
    AvaComponent,
    BannerComponent,
    BlogListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
 }

 
