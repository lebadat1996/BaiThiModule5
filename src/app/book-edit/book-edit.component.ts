import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Routes} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  isShow = false;
  message: string;
  bookId: number;
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
      this.bookService.getBookById(this.bookId).subscribe(result => {
        this.bookForm.setValue(result);
      });
    });
  }

  onSubmit(): void {
    if (this.bookId) {
      this.bookService.updateBook(this.bookForm.value).subscribe(result => {
        this.isShow = true;
        this.message = 'update success';
      });
    } else {
      this.message = 'update no success';
    }
  }
}
