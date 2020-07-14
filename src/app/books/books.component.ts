import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook [] = [];
  count = 0;
  message: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(result => {
      this.books = result;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.books.length; i++) {
        this.count = this.count + 1;
      }
    }, error => {
      this.books = [];
    });
    this.bookService.shouldRefresh.subscribe(result => {
      this.bookService.getAllBook().subscribe(results => {
        this.books = results;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.books.length; i++) {
          this.count = this.count + 1;
        }
      }, error => {
        this.books = [];
      });
    });
  }

  deleteBook(id: number): void {
    if (confirm('I want to delete ?')) {
      this.bookService.deleteBook(id).subscribe(result => {
        this.bookService.shouldRefresh.next();
      });
    }
  }
}
