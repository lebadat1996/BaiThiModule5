import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../service/book.service';
import {IBook} from '../ibook';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  books: IBook[] = [];
  bookForm: FormGroup;
  message: string;

  constructor(private bookService: BookService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    const {value} = this.bookForm;
    this.bookService.createBook(value).subscribe(result => {
      this.books.unshift(result);
      this.message = 'Add success';
      this.bookForm.reset({
        title: '',
        author: '',
        description: ''
      });
    });
  }

}
