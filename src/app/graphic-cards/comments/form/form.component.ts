import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../model/comment';

@Component({
  selector: 'gx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() sendComment = new EventEmitter();
  comment: Comment = new Comment();
  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.sendComment.emit(this.comment);
    this.comment = new Comment();
  }

}
