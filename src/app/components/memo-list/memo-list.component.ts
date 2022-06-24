import {Component, Input, OnInit} from '@angular/core';
import IReminder from "../../interfaces/IReminder";

@Component({
	selector: 'app-memo-list',
	templateUrl: './memo-list.component.html',
	styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {
	@Input() memoList!:Array<IReminder>

	constructor() {
	}

	ngOnInit(): void {

	}
}
