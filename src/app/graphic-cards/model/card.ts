export class Card {
  _id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  grade: number;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.title = obj && obj.title || "";
    this.subtitle = obj && obj.subtitle || "";
    this.description = obj && obj.description || "";
    this.image = obj && obj.image || "";
    this.grade = obj && obj.grade || "";
  }
}