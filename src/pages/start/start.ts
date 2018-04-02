import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  searchCity() {
    const modal = this.modalCtrl.create('CityPage');
    modal.present();
  }

}
