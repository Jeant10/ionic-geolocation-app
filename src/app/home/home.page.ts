import { Component } from '@angular/core';
//3

import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any=0;
  longitude: any=0;

  constructor(private geolocation: Geolocation) {
  }

  options={
    timeout:10000,
    enableHighAccuracy: true,
    maximumAge:3600
  };

  getCurrentCoordinates(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log("Error, no se puede obtener su ubicacion: ", error);
    });

  };


  




}
