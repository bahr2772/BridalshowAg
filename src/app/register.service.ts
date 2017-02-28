import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class RegisterService {


  constructor(private http: Http) { }

  register (email: string, name: string, phone: string, weddingDate: string, howDidyouHearAbout: string, numberOfGuest: string ){
    let url = "http://yknotplanning.com/api/registerBride"
      +"?email="+email
      +"&numberOfGust="+numberOfGuest
      +"&name="+name
      +"&phone="+phone
      +"&howDidYouHear="+howDidyouHearAbout
      +"&weddingDate="+weddingDate;

    let params = "";
    console.log(url);
    console.log("Hear about: "+ howDidyouHearAbout);
    console.log("Email: " + email);
    console.log("Number Of Guest [" + numberOfGuest + "]")
    return this.http.post(url, params);
  }

}
