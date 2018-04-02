import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SearchcityProvider } from '../providers/searchcity/searchcity';
import { HttpModule } from '@angular/http';

import { CurrentCityPageModule } from '../pages/current-city/current-city.module';
import { StartPageModule } from '../pages/start/start.module';
import { CityPageModule } from '../pages/city/city.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'retour'
    }),
    StartPageModule,
    CurrentCityPageModule,
    CityPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SearchcityProvider
  ]
})
export class AppModule { }
