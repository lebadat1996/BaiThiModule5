import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BookCreateComponent} from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
