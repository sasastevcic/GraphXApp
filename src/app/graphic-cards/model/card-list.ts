import { Card } from "./card";

export class CardList {
  count: number;
  results: Card[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Card(elem); }) || [];
  }
}