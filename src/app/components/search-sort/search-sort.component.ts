import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-search-sort',
	templateUrl: './search-sort.component.html',
	styleUrls: ['./search-sort.component.css']
})
export class SearchSortComponent {
	@Input() searchQuery!:string
	@Input() currentSelection!:string
	@Output() searchEvent = new EventEmitter()
	@Output() sortEvent = new EventEmitter()
	faSearch = faSearch
	constructor() { }

	onSearch(event:string) :void {
		this.searchEvent.emit(event)
	}
	onSort(event:string):void {
		this.sortEvent.emit(event)
}
}
