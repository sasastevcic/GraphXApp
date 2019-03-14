import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gx-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage;
  @Input() totalItems;
  @Input() pageSize;
  @Output() pageChange = new EventEmitter();

  lastPage: number;
  constructor() { }

  ngOnInit() {
    this.lastPage = Math.ceil(this.totalItems / this.pageSize);
  }

  ngOnChanges() {
    this.lastPage = Math.ceil(this.totalItems / this.pageSize);
  }

  updatePage(page) {
    this.currentPage = page;
    this.pageChange.emit({'page': page});
  }
}
