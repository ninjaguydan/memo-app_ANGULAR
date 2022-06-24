import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import IReminder from "../../interfaces/IReminder";

@Component({
	selector: 'app-add-memo-form',
	templateUrl: './add-memo-form.component.html',
	styleUrls: ['./add-memo-form.component.css']
})
export class AddMemoFormComponent implements OnInit {
	@Input() memo!:IReminder
	tempMemo!:IReminder
	date!:any
	time:string = '00:00'

	constructor(private dataService:DataService ) {}
	ngOnInit():void {
		this.tempMemo = {...this.memo}
		this.date = this.memo.dueDate.toString().substring(4,15)
		if (new Date(this.memo.dueDate).getHours() < 10 && new Date(this.memo.dueDate).getMinutes() < 10) {
			this.time = `0${new Date(this.memo.dueDate).getHours()}:0${new Date(this.memo.dueDate).getMinutes()}`
		} else if ( new Date(this.memo.dueDate).getHours() < 10 ) {
			this.time = `0${new Date(this.memo.dueDate).getHours()}:${new Date(this.memo.dueDate).getMinutes()}`
		} else {
			this.time = `${new Date(this.memo.dueDate).getHours()}:0${new Date(this.memo.dueDate).getMinutes()}`
		}
	}
	saveMemo():void{
		this.tempMemo.isEditing = false
		this.dataService.updateMemo(this.tempMemo)
		this.tempMemo = {...this.memo}
	}
	onDateChange(dateString:string):void{
		this.date = dateString
		this.tempMemo.dueDate = new Date(`${this.date} ${this.time}`)
	}
	onTimeChange(timeString:string):void{
		this.time = timeString
		this.tempMemo.dueDate = new Date(`${this.date} ${this.time}`)
	}
	onCancel():void{
		this.memo.isEditing = false
		this.tempMemo = {...this.memo}
	}
}
