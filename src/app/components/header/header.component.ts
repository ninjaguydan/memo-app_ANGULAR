import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faAdd } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() onAddEvent = new EventEmitter()
	faAdd = faAdd
	constructor() { }

	ngOnInit(): void {
	}
	addEvent(){
		this.onAddEvent.emit()
	}
}
