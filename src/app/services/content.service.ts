import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of, catchError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contentItem: number = 1;
  constructor() { }

  getContent(): Observable<Content[]> {
    return of(CONTENT);
  }

  getCurrentContentItem(id: number): Observable<any> {
    return this.getContent().pipe(
      map(list => {
        let item = list.find(item => item.id === id);
        if (item) {
          return item;
        } else {
          throw new Error("Id Not Found");
        }
      }),
      catchError((err, caught) => {
        return err;
      })
      // map(list => list.find(item => item.id === id))
    );
  }

}
