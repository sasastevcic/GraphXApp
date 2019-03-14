import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';
import { CardList } from './model/card-list';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CommentList } from './model/comment-list';
import { Comment } from './model/comment';

@Component({
  selector: 'gx-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.css']
})
export class GraphicCardsComponent implements OnInit {
  cards: CardList;
  comments: CommentList;
  constructor(private cs: CardsService,
              private route: ActivatedRoute) { }
  parameters = {
    'page': 1,
    'pageSize': 5
  };

  ngOnInit() {
    this.cs.getCards(this.parameters).subscribe(data => this.cards = data);
    this.route.params.subscribe(params => {
      let id = +params['id'];

      forkJoin(
        this.cs.getComments(id)
      ).subscribe(response =>
        this.comments = response[0]
      );
    });
  }

  changePageSize(pageSize) {
    this.parameters.pageSize = pageSize.pageSize || pageSize;
  }

  changePage(newPage) {
    this.parameters.pageSize = newPage.pageSize || this.parameters.pageSize;
    this.parameters.page = newPage.page || this.parameters.page;
  }


  sendComment(newComment: Comment) {
    let id = this.route.snapshot.params['id'];
    this.cs.postComment(id, newComment).subscribe(data => window.alert('Comment sent!'));
  }

  
}
