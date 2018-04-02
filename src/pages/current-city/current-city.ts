import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-current-city',
  templateUrl: 'current-city.html',
})
export class CurrentCityPage {

  @ViewChild('map') mapRef: ElementRef;
  public isPositionVisible: boolean = true;

  private currentCityInfos;

  constructor(private navCtrl: NavController, private navParams: NavParams) { }

  ionViewWillEnter() {
    this.currentCityInfos = this.navParams.get('city');
    console.log(this.currentCityInfos);
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(this.currentCityInfos.centre.coordinates[1], this.currentCityInfos.centre.coordinates[0]);
    const options = {
      center: location,
      zoom: 10,
      streeViewControl: false,
      mapTypeId: 'roadmap'
    }
    const maps = new google.maps.Map(this.mapRef.nativeElement, options);
    this.Marker(location, maps);
  }


  Marker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }

  showPossition() {
    this.isPositionVisible = !this.isPositionVisible;
  }

}
