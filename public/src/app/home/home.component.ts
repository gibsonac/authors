import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAuthorsFromService();
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
  }
  goHome() {
    this._router.navigate(['/index']);
  }
  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("got the authors!", data)
      this.authors = data;
    })
  }
  deleteAuth(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("this author got deleted!", data)
      this.getAuthorsFromService();
    })
  }
}
