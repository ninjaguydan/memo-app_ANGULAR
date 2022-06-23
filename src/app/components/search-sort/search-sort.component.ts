import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-search-sort',
	templateUrl: './search-sort.component.html',
	styleUrls: ['./search-sort.component.css']
})
export class SearchSortComponent implements OnInit {
	@Input() initQuery:string = ''
	@Output() searchEvent = new EventEmitter()
	faSearch = faSearch
	constructor() { }

	ngOnInit(): void {
	}

	onSearch(event:string) :any {
		this.searchEvent.emit(event)
	}
}
