import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/delay';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    //simulate server latency with 2 second delay
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    //simulate server latency with 2 second delay
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    //simulate server latency with 2 second delay
    return this.restangular.all('leaders').getList({ featured: true })
      .map(leader => leader[0]);    
  }
}
