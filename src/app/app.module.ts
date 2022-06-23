import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddMemoFormComponent } from './components/add-memo-form/add-memo-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SearchSortComponent } from './components/search-sort/search-sort.component';
import { MemoListComponent } from './components/memo-list/memo-list.component';
import { MemoComponent } from './components/memo/memo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemoFormComponent,
    HeaderComponent,
    SearchSortComponent,
    MemoListComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
