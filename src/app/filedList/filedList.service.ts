import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import '../rxjs-operators';

import { Item } from '../model/item';


@Injectable()
export class FiledListService {
    constructor(private _http: Http) {}

    getFiledList() {
        return this._http.get('/api/filed')
            .map((res:Response) => {
                var i = <Item[]>res.json().data;
                return i;
            })
            .catch((errorResponse) => {
                 let res = <Response>errorResponse;
    let err = res.json();
    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
   
    return Observable.of();
            });
    }

}