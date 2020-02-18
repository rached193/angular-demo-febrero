import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { AgendaService } from './agenda.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'dir-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  dataSource = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.getTodos().subscribe(data => {
      this.dataSource = data;
    });
  }

}
