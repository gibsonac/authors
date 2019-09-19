import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  theAuthor: any;
  haveErrors: boolean = false;
  errors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.theAuthor = {
      name: ""
    }
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
  }
  goHome() {
    this._router.navigate(['/index']);
  }
  newAuthor() {
    let observable = this._httpService.addAuthor(this.theAuthor);
    observable.subscribe((data: any) => {
      if(data.err){
        console.log("this was an error", data);
        this.errors = data.errors;
      }
      else {
        console.log("this was a success", data);
        this.theAuthor = {
              name: ""
            }
            this.goHome();

      }
      // if (data.length > 0) {
      //   this.errors = data;
      //   this.haveErrors = true;
      // }
      // else {
      //   console.log("here is my new author", data)
      //   this.theAuthor = {
      //     name: ""
      //   }
      //   this.goHome();
      // }
    })
  }
}
