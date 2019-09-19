import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/authors/');
  }
  addAuthor(theAuthor) {
    return this._http.post('/authors/', theAuthor);
  }
  showAuthor(id) {
    return this._http.get(`/authors/${id}`)
  }
  deleteAuthor(id) {
    return this._http.delete(`/authors/${id}`)
  }
  updateAuth(id, theAuthor) {
    return this._http.put(`/authors/${id}`, theAuthor)
  }
}
