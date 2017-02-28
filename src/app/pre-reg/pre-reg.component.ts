import { Component, OnInit } from '@angular/core';
import {CheckinService} from "../checkin.service";
declare let $:any;


@Component({
  selector: 'app-pre-reg',
  templateUrl: './pre-reg.component.html',
  styleUrls: ['./pre-reg.component.css']
})
export class PreRegComponent implements OnInit {

  email: string;
  message: string;
  numberOfGuest = '0';
  constructor(private checkinService: CheckinService){
  }


  checkin(){
    this.checkinService.checkIn(this.email, this.numberOfGuest).subscribe(
      res => {
        console.log(res);
        if (res.statusText = "success")
          console.log("success");
        this.message = res.text();
        if (this.message === "AlreadyCheckedIn"){
          this.message = "You Are Already Checked In, If this is an error please see a staff member.";
          let preReg = $('preReg');
          preReg.css('background-color','#ef9a9a');

        } else if (this.message === "checkedIn") {
          this.message = "Bride, You Are Checked In.";
          let preReg = $('preReg');
          preReg.css('background-color','#80cbc4');

        } else if (this.message === "notFound") {
          this.message = "Bride Sorry We Can't Find You. Please Register.";
          let preReg = $('preReg');
          preReg.css('background-color','#ffc107');
        }

      },
      err => console.log(err)
    );
    let intervalId = setInterval(() => {
      let preReg = $('preReg');
      this.message = "";
      preReg.css('background-color', '');
    }, 4000);

    this.email = "";
    this.numberOfGuest = "0";
  }


  ngOnInit() {
  }

}
