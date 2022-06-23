import { Component, OnInit } from '@angular/core';
import { faAdd } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	faAdd = faAdd
	constructor() { }

	ngOnInit(): void {
	}

}
