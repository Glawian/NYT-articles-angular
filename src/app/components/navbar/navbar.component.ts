import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  stocks;
  searchValue: string;
  sorting: SelectItem[];
  selectedSorting = 'newest';
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  maxDate: Date = new Date();
  resultsPerPage = 30;

  constructor(private api: ApiRequestsService) { }

  ngOnInit(): void {
    this.sorting = [
      { label: 'Newest', value: 'newest' },
      { label: 'Oldest', value: 'oldest' }
    ];
    console.log(this.dateFrom);
    this.api.load(this.searchValue, this.dateFrom, this.dateTo, this.selectedSorting).subscribe(stocks => this.stocks = stocks);
  }

}
