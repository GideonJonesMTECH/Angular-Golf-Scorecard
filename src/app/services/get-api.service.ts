import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAPIService {
  constructor(private http: HttpClient) {}

  apiCall(addition = '') {
    console.log(
      this.http.get(
        'https://golf-courses-api.herokuapp.com/courses/' + addition
      )
    );
    return this.http.get(
      'https://golf-courses-api.herokuapp.com/courses/' + addition
    );
  }
}
