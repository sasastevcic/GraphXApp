import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card';
import { CardsService } from '../service/cards.service';

@Component({
  selector: 'gx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card[];
  constructor(private cs: CardsService) { }

  ngOnInit() {
  }

  vote(grade) {
    let tmpCard = new Card(this.card);
    tmpCard.grade = grade;
    this.cs.putGrade(tmpCard).subscribe();
  }


}
