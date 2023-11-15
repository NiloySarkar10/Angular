import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../service/app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Customer {
  name: string;
  id: number;
  age: number;
  place: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// dataSource: MatTableDataSource<LocationItem> = new MatTableDataSource();

export class HomeComponent implements OnInit{
  dataSource:any;
  constructor(private service: AppService){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.service.getCustomers().subscribe(data => {
      console.log(' DATA : ',data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }
  displayedColumns: string[] = ['id', 'name', 'age', 'place'];
}
