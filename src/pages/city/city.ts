import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchcityProvider } from '../../providers/searchcity/searchcity';

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {

  private urlData: any;
  private cityNameBox: any[] = [];
  private citySearchInput: string = '';

  constructor(
    private navCtrl: NavController,
    private Searchcity: SearchcityProvider
  ) { }


  ngOnInit(): void {
    this.getCityCurrent(this.citySearchInput);
  }

  getCityCurrent(citySearch) {
    this.Searchcity.getCity(citySearch).subscribe(data => {
      this.cityNameBox = [];
      data.forEach(city => {
        this.cityNameBox.push(city);
      });
      console.log('cityNameBox', this.cityNameBox);
    })
  }

  onInput(e) {
    this.citySearchInput = e.target.value;
    this.getCityCurrent(this.citySearchInput);
  }

  selectedCity(city: any) {
    this.navCtrl.push('CurrentCityPage', { city: city })
  }
}
