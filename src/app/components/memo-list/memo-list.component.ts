import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-memo-list',
	templateUrl: './memo-list.component.html',
	styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {

	memoList = [
		{
			title: "Walk Dog",
			desc: "Take the dog outside. Be sure to avoid the sidewalk, because she'll go anywhere",
			dueDate: "2022-06-22 17:00",
			isComplete: false
		},
		{
			title: "Get chicken from the grocery store",
			desc: "",
			dueDate: "2022-06-23 09:30",
			isComplete: false
		},
		{
			title: "Buy Tickets to opera",
			desc: "Go to opera.com before the sale ends",
			dueDate: "2022-06-21 6:00",
			isComplete: true
		},
		{
			title: "Walk Dog",
			desc: "",
			dueDate: "2022-06-23 18:00",
			isComplete: false
		},
		{
			title: "Purchase Shoes for Wedding",
			desc: "Check Nordstrom Rack first, then Dillard's, then Joseph Store for Men",
			dueDate: "2022-06-22 11:00",
			isComplete: true
		},
	]

	constructor() {
	}

	ngOnInit(): void {
	}

}
