import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  selectedSorting = 'newest';
  searchValue: string;

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  sendRequest() {
    this.localStorage.set('searchValue', this.searchValue);
    this.router.navigate(['/dashboard']);
  }

}
