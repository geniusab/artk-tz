import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


import {Photo} from './photo';

@Injectable()
export class PhotoService {
  constructor(private http:Http){

  }
  getData():Observable<Photo[]>{
    return this.http.get('http://jsonplaceholder.typicode.com/photos/?_start=0&_limit=20')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response){
    let body =  res.json();
    return body || [];
  }

  private handleError(error:any) {

    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}