import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchValue: string;
  dateFrom: Date;
  dateTo: Date;
  maxDate: Date = new Date();

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.searchValue = this.localStorage.get('searchValue', '');
  }

  sendRequest(event: any) {
    this.searchValue = event.target.firstChild.value;
    this.localStorage.set('searchValue', this.searchValue);
  }

}
