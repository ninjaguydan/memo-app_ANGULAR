import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-add-memo-form',
	templateUrl: './add-memo-form.component.html',
	styleUrls: ['./add-memo-form.component.css']
})
export class AddMemoFormComponent implements OnInit {
	@Input() memo: any

	constructor() {
	}

	ngOnInit(): void {
	}
	saveMemo(){
		this.memo.isEditing = false
	}

	onDateChange(dateString: string) {
		this.memo.dueDate = new Date(dateString)
	}

}
