import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, ViewChild } from '@angular/core';
import { AgendaService } from './agenda.service';
import { MatSort } from '@angular/material/sort';
import { switchMap, startWith } from 'rxjs/operators';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'dir-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  dataSource = [];
  resultsLength = 0;
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) page: MatPaginator;

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    combineLatest(
      this.sort.sortChange.pipe(startWith({})),
      this.page.page.pipe(startWith({ pageSize: 10, pageIndex: 0 }))
    )
      .pipe(
        switchMap(([sort, page]) => {
          return this.agendaService.getTodos(sort, page as PageEvent);
        })
      ).subscribe(info => {
        this.dataSource = info.data;
        this.resultsLength = info.length;
      });
  }

}
