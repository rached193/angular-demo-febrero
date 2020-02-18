import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  getTodos(sort, page: PageEvent): Observable<any> {

    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map(data => {
        return {
          data:
            data.slice(page.pageIndex, page.pageSize),
          length: data.length
        };
      })
      );
  }
}
