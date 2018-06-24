import { Injectable } from '@angular/core';
import { Planet } from "./planet";
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  getPlanet(id: string): Observable<Planet> {

    let temp = 'http://ghosteacher.com/apis/planets.php?apikey=pineapple&p_id=';
    let url = temp.concat(id);
    console.log(url);
    return this.http.get<Planet>(url);
  }

  constructor(private http: HttpClient) { }
}
