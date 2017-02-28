import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class CheckinService {


  constructor(private http: Http) { }

  checkIn (email: string, numberOfGuest: string){
  let url = "http://yknotplanning.com/api/checkUser?email="+email+"&numberOfGuest="+numberOfGuest;
  let params = "email="+email+"numberOfGuest="+numberOfGuest;
  console.log(params);
  console.log("Email: " + email);
  console.log("Number Of Guest [" + numberOfGuest + "]")
  return this.http.post(url, params);
}

}
