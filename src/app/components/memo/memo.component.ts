import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faExclamation} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-memo',
	templateUrl: './memo.component.html',
	styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
	@Input() memo: any
	faCheck = faCheck
	faWarning = faExclamation

	constructor() {
	}

	ngOnInit(): void {
	}

	setCompletion() {
		this.memo.isComplete = !this.memo.isComplete
	}
	toggleEdit(){
		if ( !this.memo.isComplete ){
			this.memo.isEditing = true
		}
	}

}
