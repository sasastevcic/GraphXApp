export class Comment {
  _id: number;
  cards: number;
  author: string;
  text: string;
  date: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.cards = obj && obj.cards || null;
    this.author = obj && obj.author || "";
    this.text = obj && obj.text || "";
    this.date = obj && obj.date || "";
  }
}