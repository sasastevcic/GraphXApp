import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppComponent } from './app.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { PaginationComponent } from './graphic-cards/pagination/pagination.component';
import { CardComponent } from './graphic-cards/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './graphic-cards/comments/comments.component';
import { FormComponent } from './graphic-cards/comments/form/form.component';
import { CommentComponent } from './graphic-cards/comments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GraphicCardsComponent,
    PaginationComponent,
    CardComponent,
    CommentsComponent,
    FormComponent,
    CommentComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
