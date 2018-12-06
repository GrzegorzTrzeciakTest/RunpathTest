import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class ApiService {
  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

  getDataJson() {
    return this.http.get('http://jsonplaceholder.typicode.com/photos');
  }
}
