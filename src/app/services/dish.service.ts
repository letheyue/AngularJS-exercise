import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    //simulate server latency with 2 second delay
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id: number): Observable<Dish> {
    //simulate server latency with 2 second delay
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish> {
    //simulate server latency with 2 second delay
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }
}
