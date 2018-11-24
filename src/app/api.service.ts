import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map, filter, scan  } from 'rxjs/operators';
import { Observable, zip } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL:string = "https://api.punkapi.com/v2/beers";
  constructor(private http: HttpClient) { }

  getRandomBeers(ids){
    var url;
    if(ids != null) {
      url = `${this.BASE_URL}?ids=`
      for(let id of ids){ url += (id+"|")}
      console.log(url);
      
    } else {
     url = `${this.BASE_URL}?ids=27|15|17|4|5|6`
    }

    var arr = [];
    return this.http.get(url);
  }
}
