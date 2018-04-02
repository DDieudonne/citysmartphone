import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentCityPage } from './current-city';

@NgModule({
  declarations: [
    CurrentCityPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentCityPage),
  ],
})
export class CurrentCityPageModule {}
