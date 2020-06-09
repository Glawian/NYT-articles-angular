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

  FormatDateFrom(dateFrom) {
    const dayFrom = ('0' + dateFrom.getDate()).slice(-2);
    const monthFrom = ('0' + (dateFrom.getMonth() + 1)).slice(-2);
    return dateFrom.getFullYear() + (monthFrom) + (dayFrom);
  }

  FormatDateTo(dateTo) {
    const dayTo = ('0' + dateTo.getDate()).slice(-2);
    const monthTo = ('0' + (dateTo.getMonth() + 1)).slice(-2);
    return dateTo.getFullYear() + (monthTo) + (dayTo);
  }

  load(value: string, sort: string, page?: number, dateFrom?: any, dateTo?: any) {
    value ? this.value = `&q=${value}` : this.value = '';

    if (dateFrom) {
      dateFrom = this.FormatDateFrom(dateFrom);
      this.from = `&begin_date=${dateFrom}`;
    } else { this.from = ''; }

    if (dateTo) {
      dateTo = this.FormatDateTo(dateTo);
      this.to = `&end_date=${dateTo}`;
    } else { this.to = ''; }

    this.sort = sort;
    return this.http.get(`${service}?fl=abstract,headline,web_url&page=${page}${this.from}${this.to}${this.value}&sort=${this.sort}&api-key=${this.token}`);
  }
}
