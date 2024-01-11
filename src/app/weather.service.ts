import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getweather(stad: string, unit: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + stad + '&appid=f4f65df36b631eb49c24ae4adcba8c75&units=' + unit)
  }
}
