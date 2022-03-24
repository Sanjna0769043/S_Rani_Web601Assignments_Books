import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content';
import { Observable, of, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contentItem: number = 1;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>("api/content",
      newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put("api/content", contentItem,
      this.httpOptions);
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
    );
  }

}
