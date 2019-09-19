import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  // authors: any;
  // theAuthor: any;

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    // this.getAuthorsFromService();
    // this.theAuthor = {
    //   name: ""
    // }

  }
  //add functions after this line
  // getAuthorsFromService() {
  //   let observable = this._httpService.getAuthors();
  //   observable.subscribe(data => {
  //     console.log("got the authors!", data)
  //     this.authors = data;
  //   })
  // }
  // newAuthor() {
  //   let observable = this._httpService.addAuthor(this.theAuthor);
  //   observable.subscribe(data => {
  //     console.log("here is my new author", data)
  //   })
  // }
  // thisAuthor(id){
  //   let observable = this._httpService.showAuthor(id);
  //   observable.subscribe(data => {
  //     console.log("got the author deets!", data)
  //   })
  // }
  // deleteAuth(id){
  //   let observable = this._httpService.deleteAuthor(id);
  //   observable.subscribe(data => {
  //     console.log("this author got deleted!", data)
  //   })
  // }
}
