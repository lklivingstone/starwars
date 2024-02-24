import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaginationService } from '../../../service/pagination/pagination.service';

@Component({
  selector: 'planets-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  currentPageNumber: number = 0;

  constructor(
    private paginationService: PaginationService,
    private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe(queryParams => {
        this.onSelectPage(Number(queryParams['page']));
      });
    }

  onSelectPage(pageNumber: number): void {
    this.paginationService.setSelectedCurrentPage(pageNumber);
    this.currentPageNumber = pageNumber;
  }
}