import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  myWeather: any;
  city() {};
  temperatuur: number = 0;
  feelslike: number = 0;
  luchtvochtig: number = 0;
  Druk: number = 0;
  Zicht: string = '';
  iconurl: string = '';
  stad: string = 'Bree';
  unit: string = 'metric';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getweather(this.stad, this.unit).subscribe({

      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.city);
        this.temperatuur = this.myWeather.main.temp;
        this.feelslike = this.myWeather.main.feels_like;
        this.luchtvochtig = this.myWeather.main.humidity;
        this.Druk = this.myWeather.main.pressure;
        this.Zicht = this.myWeather.weather[0].main;

        this.iconurl = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }

}
