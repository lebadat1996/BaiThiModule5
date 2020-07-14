import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'book-create',
    component: BookCreateComponent
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent
  }, {
    path: 'book/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
