import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardList } from '../model/card-list';
import { map } from 'rxjs/operators';
import { CommentList } from '../model/comment-list';
import { Comment } from '../model/comment';
import { Card } from '../model/card';

const baseUrl = 'http://localhost:3000/api/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getCards(params?): Observable<CardList> {
    let queryParams = {};
    if(params) {
      queryParams = { params: new HttpParams()
        .set('page', params.page && params.page.toString() || '1')
        .set('pageSize', params.pageSize && params.pageSize.toString() || '5')
      };
    }
    return this.http.get(baseUrl, queryParams).pipe(map(response => new CardList(response)));
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get(baseUrl + '/' + id + '/comments').pipe(map(response => new CommentList(response)));
  }

  postComment(id: number, comment: Comment) {
    return this.http.post(baseUrl + '/' + id + '/comments', comment);
  }

  putGrade(card: Card) {
    return this.http.put(baseUrl + '/' + card._id, card);
  }
}
