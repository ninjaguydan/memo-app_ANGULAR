import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	query = ""
	results:any = []
	memoList:any = [
		{
			id: '1',
			title: "Walk Dog",
			desc: "Take the dog outside. Be sure to avoid the sidewalk, because she'll go anywhere",
			dueDate: "2022-06-22 17:00",
			isComplete: false,
			isEditing: false
		},
		{
			id: '2',
			title: "Get chicken from the grocery store",
			desc: "",
			dueDate: "2022-06-23 09:30",
			isComplete: false,
			isEditing: false
		},
		{
			id: '3',
			title: "Buy Tickets to opera",
			desc: "Go to opera.com before the sale ends",
			dueDate: "2022-06-21 6:00",
			isComplete: true,
			isEditing: false
		},
		{
			id: '4',
			title: "Walk Dog",
			desc: "",
			dueDate: "2022-06-23 18:00",
			isComplete: false,
			isEditing: false
		},
		{
			id: '5',
			title: "Purchase Shoes for Wedding",
			desc: "Check Nordstrom Rack first, then Dillard's, then Joseph Store for Men",
			dueDate: "2022-06-22 11:00",
			isComplete: true,
			isEditing: false
		},
	]

	addEvent() {
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
		this.setResults()
	}
	onSearch(query: string) {
		this.query = query.toLowerCase();
		this.setResults();
	}
	clearCompleted(){
		this.memoList = this.memoList.filter((m:any) => !m.isComplete)
		this.setResults()
	}
	setResults() {
		this.results = this.memoList.filter(
			(memo:any) => {
				return memo.title.toLowerCase().includes(this.query)
			}
		)
	}
	ngOnInit(): void {
		this.setResults()
	}
}
