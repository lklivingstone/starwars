import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private selectedCurrentPageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  getSelectedCurrentPage(): Observable<number> {
    return this.selectedCurrentPageSubject.asObservable();
  }

  setSelectedCurrentPage(value: number): void {
    this.selectedCurrentPageSubject.next(value);
  }
}