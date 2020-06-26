import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  get(searchValue: string, fallback: any) {
    let value = localStorage.getItem(searchValue);
    return (value !== 'undefined' && value) ? JSON.parse(value) : fallback;
  }

  set(searchValue: string, value: any) {
    localStorage.setItem(searchValue, JSON.stringify(value));
  }

}
