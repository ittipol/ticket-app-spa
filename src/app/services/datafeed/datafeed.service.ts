import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class DatafeedService {

	private url: string = environment.service.api+'/getFeed'

  constructor(private httpClient: HttpClient) { }

  getFeed(dataType: string) {
  	// console.log(this.url);
  	// return this.httpClient.get(this.url,[{
  	// params: new HttpParams().set()
  	// }])
  }

}
