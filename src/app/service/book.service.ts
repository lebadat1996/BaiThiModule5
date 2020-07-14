import {Injectable} from '@angular/core';
import {IBook} from '../ibook';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';
  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getAllBook(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.API_URL);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.API_URL, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  getBookById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.API_URL}/${id}`);
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(`${this.API_URL}/${book.id}`, book);
  }

}
