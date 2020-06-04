import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const service = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  value: string;
  from: string;
  to: string;
  sort = 'newest';
  private token = 'eqJAUdFBmQaSUIPYf9xwdkDp7UODq28W';
  constructor(private http: HttpClient) { }

  load(value, dateFrom, dateTo, sort) {
    this.value = value;
    this.from = dateFrom;
    this.to = dateTo;
    this.sort = sort;
    return this.http.get(`${service}?begin_date=${this.from}&end_date=${this.to}&fl=headline,web_url&q=${value}&sort=${this.sort}&api-key=${this.token}`);
  }
}
