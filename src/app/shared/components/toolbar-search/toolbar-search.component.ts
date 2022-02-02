import { Component, OnInit } from '@angular/core';
import {SORT_TYPES} from "@core/constants/sort-type.constant";
import {ISortType} from "@core/models";

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss']
})
export class ToolbarSearchComponent implements OnInit {

  public readonly sortTypes:ISortType[] = SORT_TYPES;

  public query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
