import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../model/comment';
import { CardsService } from '../service/cards.service';

@Component({
  selector: 'gx-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[];
  @Output() newComment = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendComment(newComment: Comment) {
    this.newComment.emit(newComment);
  }

}
