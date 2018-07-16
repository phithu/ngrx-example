import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  public getUser() {
    return this.http.get('http://5a0031a3bb3aeb00123a7c5f.mockapi.io/products/products');
  }
}
