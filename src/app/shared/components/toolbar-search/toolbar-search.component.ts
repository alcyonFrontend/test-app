import { Component, OnInit, Output } from '@angular/core';
import {SORT_TYPES} from "@core/constants/sort-type.constant";
import {ISortType} from "@core/models";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss']
})
export class ToolbarSearchComponent implements OnInit {

  public readonly sortTypes:ISortType[] = SORT_TYPES;

  @Output()
  queryChanged: EventEmitter<string>  = new  EventEmitter<string>();
  
  @Output()
  sortChanged: EventEmitter<string>  = new  EventEmitter<string>();

  public query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeQuery(event: any){
    event.preventDefault();
    this.queryChanged.emit(this.query);
  }
  onChangeSort(sort: string){
    this.sortChanged.emit(sort);
  }
}
