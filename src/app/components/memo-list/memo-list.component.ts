import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-memo-list',
	templateUrl: './memo-list.component.html',
	styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {
	@Input() memoList:any

	constructor() {
	}

	ngOnInit(): void {

	}
}
