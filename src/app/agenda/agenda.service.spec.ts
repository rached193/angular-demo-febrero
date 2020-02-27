import { AgendaService } from './agenda.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';


class StubHttp {
  get(url: string) {
    return of([true, true, true, true]);
  }
}
describe('AgendaService', () => {
  let service: AgendaService;
  let http: StubHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: StubHttp },
        AgendaService
      ]
    });
    service = TestBed.get(AgendaService);
    http = TestBed.get(HttpClient);
  });

  it('should be exist', () => {
    expect(service).toBeDefined();
  });

  describe('getTodos', () => {
    // Arrage
    const DATA: PageEvent = {
      pageIndex: 0,
      pageSize: 10,
      length: 100
    };

    beforeEach(() => {
      spyOn(http, 'get').and.callThrough();
    });


    // Act
    it('return data', () => {


      service.getTodos(null, DATA).subscribe(info => {
        // Assert
        expect(info).toEqual(
          {
            data: [true, true, true, true],
            length: 4
          });
        expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
      });
    });

  });

});
