import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";
import { Subscription } from "rxjs";
import IReminder from "./interfaces/IReminder";


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
	query:string = ""
	results:Array<IReminder> = []
	memoListSub:Subscription
	currentSelection:string = "dueDate"

	constructor( private dataService:DataService ) {
		this.results = [...this.dataService.memoList]
		this.memoListSub = dataService.memoList$.subscribe( newList => this.results = newList )
		this.onSort(this.currentSelection)
	}
	ngOnDestroy(): void {
		this.memoListSub.unsubscribe()
	}
	createMemo():void{
		this.dataService.addMemo()
	}
	onSearch(searchQuery:string):void{
		this.query = searchQuery
		this.results = this.dataService.memoList.filter(memo => memo.title.toLowerCase().includes(this.query.toLowerCase()))
		this.onSort(this.currentSelection)
	}
	clearCompleted():void{
		this.dataService.clearCompleted()
		this.onSort(this.currentSelection)
	}
	onSort(sortBy:string):void{
		this.currentSelection = sortBy
		if ( sortBy === "dueDate" ) {
			this.results = this.results.sort((a,b) => a[sortBy].getTime() - b[sortBy].getTime())
		} else {
			// @ts-ignore
			this.results = this.results.sort((a,b) => a[sortBy].localeCompare(b[sortBy]))
		}
	}
}
