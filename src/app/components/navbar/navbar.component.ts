import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ApiRequestsService } from 'src/app/services/api-requests.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  searchValue: string;
  sorting: SelectItem[];
  selectedSorting = 'newest';
  dateFrom: Date;
  dateTo: Date;
  maxDate: Date = new Date();
  resultsPerPage = 30;

  constructor(private api: ApiRequestsService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.sorting = [
      { label: 'Newest', value: 'newest' },
      { label: 'Oldest', value: 'oldest' }
    ];
    this.searchValue = this.localStorage.get('searchValue', '');
    this.api.load(this.searchValue, this.selectedSorting, this.dateFrom, this.dateTo).toPromise();
  }

  sendRequest() {
    this.api.load(this.searchValue, this.selectedSorting, this.dateFrom, this.dateTo).toPromise();
  }

}
