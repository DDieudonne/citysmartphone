import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityPage } from './city';
import { SearchcityProvider } from '../../providers/searchcity/searchcity';

@NgModule({
  declarations: [
    CityPage,
  ],
  imports: [
    IonicPageModule.forChild(CityPage),
  ],
  providers: [
    SearchcityProvider
  ]
})
export class CityPageModule { }
