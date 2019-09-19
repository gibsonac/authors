import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  theAuthor: any = '';
  errors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.thisAuthor(params['id']);
    });
  }
  goHome() {
    this._router.navigate(['/index']);
  }
  thisAuthor(id) {
    let observable = this._httpService.showAuthor(id);
    observable.subscribe(data => {
      console.log("got the author deets!", data)
      this.theAuthor = data;
    })
  }
  updateAuthor(id) {
    let observable = this._httpService.updateAuth(id, this.theAuthor)
    observable.subscribe((data: any) => {
      if (data.err) {
        console.log("this was an error", data);
        this.errors = data.errors;
      }
      else {
        console.log("here's my edited author!", data)
        this.goHome();

      }
    })
  }
}
