import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';

@Component({
  selector: 'gx-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
