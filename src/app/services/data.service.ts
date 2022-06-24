import { Injectable } from '@angular/core';
import IReminder from "../interfaces/IReminder";
import { v4 as uuidv4 } from 'uuid'
import {Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DataService {
	memoList:Array<IReminder> = [
		{
			id: '1',
			title: "Lay out the HTML",
			desc: "Just get the data on the page. Gotta see what we're working with here",
			dueDate: new Date("2022-06-20 06:00"),
			isComplete: true,
			isEditing: false
		},
		{
			id: '2',
			title: "Style with CSS",
			desc: "Working kinda backwards here. Normally, we should get it to work first then style later",
			dueDate: new Date("2022-06-20 16:30"),
			isComplete: true,
			isEditing: false
		},
		{
			id: '3',
			title: "Add CRUD functionality",
			desc: "",
			dueDate: new Date("2022-06-21 12:00"),
			isComplete: true,
			isEditing: false
		},
		{
			id: '4',
			title: "Refactor to use Services, Subjects and Subscriptions",
			desc: "",
			dueDate: new Date("2022-06-23 9:00"),
			isComplete: false,
			isEditing: false
		},
		{
			id: '5',
			title: "Implement Filtering and Sorting",
			desc: "This part might be more complicated than expected",
			dueDate: new Date("2022-06-24 14:30"),
			isComplete: false,
			isEditing: false
		},
		{
			id: '6',
			title: "Take a load off..",
			desc: "Not sure what other features I can add. This might have reached its logical conclusion",
			dueDate: new Date("2022-06-24 17:00"),
			isComplete: false,
			isEditing: false
		},
	]
	memoList$ = new Subject<Array<IReminder>>()

	constructor() { }

	addMemo():void {
		this.memoList = [
			{
				id: uuidv4(),
				title: "",
				desc: "",
				dueDate: new Date(),
				isComplete: false,
				isEditing: true
			},
			...this.memoList,
		]
		this.memoList$.next(this.memoList)
	}
	clearCompleted():void {
		this.memoList = this.memoList.filter((m: any) => !m.isComplete)
		this.memoList$.next(this.memoList)

	}
	updateMemo(memoToUpdate:IReminder):void{
		this.memoList = this.memoList.map( memo => {
			if ( memo.id === memoToUpdate.id ) {
				return memoToUpdate
			}
			return memo
		})
		this.memoList$.next(this.memoList)
	}
}
