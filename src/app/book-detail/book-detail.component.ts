import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Routes} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: IBook;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

}
