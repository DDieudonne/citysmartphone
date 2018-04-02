import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchcityProvider {
  private citySearch: string;
  private url = 'https://geo.api.gouv.fr/communes?nom=';
  private urlImage = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

  constructor(private http: Http) { }

  getCity(citySearch: string) {
    return this.http.get(this.url + citySearch + "&fields=centre,codesPostaux,population,departement").map(res => res.json());
  }

  // getImageByCity(citySearch: string) {
  //   let myHeaders = new Headers();
  //   Headers.append('Content-Type', 'application/json');
  //   let Params = new URLSearchParams();
  //   Params.append('citySearch', citySearch);
  //   let options = new RequestOptions({ headers: Headers, params: Params });
  //   return this.http.get(this.urlImage + citySearch + ENV.GoogleApiKey);
  // }

}
