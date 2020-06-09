import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnChanges {
  @Input() searchValue: string;
  @Input() dateFrom: Date;
  @Input() dateTo: Date;
  sorting: SelectItem[];
  articles;
  articlesArray;
  selectedSorting = 'newest';
  page = 0;

  constructor(private api: ApiRequestsService) { }

  ngOnInit(): void {
    this.sorting = [
      { label: 'Newest first', value: 'newest' },
      { label: 'Oldest first', value: 'oldest' }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dateFrom || changes.dateTo || changes.searchValue) {
      this.api.load(this.searchValue, this.selectedSorting, this.page, this.dateFrom, this.dateTo).subscribe(data => {
        this.articles = data;
        this.articlesArray = this.articles.response.docs;
      });
    }
  }

  changeSorting() {
    this.api.load(this.searchValue, this.selectedSorting, this.page, this.dateFrom, this.dateTo).subscribe(data => {
      this.articles = data;
      this.articlesArray = this.articles.response.docs;
    });
  }

  paginate(event) {
    this.page = event.page;
    this.api.load(this.searchValue, this.selectedSorting, this.page, this.dateFrom, this.dateTo).subscribe(data => {
      this.articles = data;
      this.articlesArray = this.articles.response.docs;
    });
    window.scroll(0,0);
  }

}
