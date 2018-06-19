import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  getBeers(foodPairing: string) {
    let params = new HttpParams();

    params = params.append('per_page', '20');
  params = !foodPairing ? params : params.append('food', foodPairing);

    return this.httpClient.get<any[]>(`https://api.punkapi.com/v2/beers`, { params: params });
  }

  getBeer(id: number) {
    return this.httpClient.get<any[]>(`https://api.punkapi.com/v2/beers/${id}`)
      .pipe(map(b => b[0]));
  }
}
