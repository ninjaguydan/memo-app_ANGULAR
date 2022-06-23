import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-search-sort',
	templateUrl: './search-sort.component.html',
	styleUrls: ['./search-sort.component.css']
})
export class SearchSortComponent implements OnInit {
	faSearch = faSearch
	constructor() { }

	ngOnInit(): void {
	}

}
