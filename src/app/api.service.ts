import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  apiUrl = 'https://api.tintup.com/v1/feed/maratbokov?api_token=92c1f5339e72c50e5d31fba9ea2684c8ca3f1525';

  constructor(private http: Http) { }

  getFeed(type) {
    if (type !== 'all') {
      return this.http.get(this.apiUrl + '&source=' + type)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json();
      });
    } else {
      return this.http.get(this.apiUrl)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json();
      });
    }
  }
}
