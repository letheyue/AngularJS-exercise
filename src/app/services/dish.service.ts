import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class DishService {

  constructor(private http: Http,
    private processHttpmsgService: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    //simulate server latency with 2 second delay
    return this.http.get(baseURL + 'dishes')
      .map(res => { return this.processHttpmsgService.extractData(res);});
  }

  getDish(id: number): Observable<Dish> {
    //simulate server latency with 2 second delay
    return this.http.get(baseURL + 'dishes/'+ id)
      .map(res => { return this.processHttpmsgService.extractData(res); });
  }

  getFeaturedDish(): Observable<Dish> {
    //simulate server latency with 2 second delay
    return this.http.get(baseURL + 'dishes?featured=true')
      .map(res => { return this.processHttpmsgService.extractData(res)[0]; });
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) });
  }
}
