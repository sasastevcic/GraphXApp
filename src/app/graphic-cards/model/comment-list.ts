import { Comment } from "./comment";

export class CommentList {
  count: number;
  results: Comment[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Comment(elem); }) || [];
  }
}