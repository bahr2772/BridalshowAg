import { Component, OnInit} from '@angular/core';
import { RegisterService } from  '../register.service';

declare let $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  name: string;
  phone: string;
  weddingDate: Date;
  hearAbout: string;
  numberOfGuest = "0";
  message: string;


  constructor(private registerService: RegisterService){  }

  register(){
    this.registerService.register(this.email, this.name, this.phone, this.weddingDate.toString(), $('#howDidYouHear').val(), this.numberOfGuest).subscribe(
      res => {
        console.log(res);
        if (res.statusText = "success")
          console.log("success");
        this.message = res.text();
        if (this.message === "brideFound"){
          this.message = "You Are Already Checked In, If this is an error please see a staff member.";
          let preReg = $('reg');
          preReg.css('background-color','#ef9a9a ');

        } else if (this.message === "brideSaved") {
          this.message = "Bride, You Are Checked In.";
          let preReg = $('reg');
          preReg.css('background-color','#80cbc4');

        } else if (this.message === "brideFoundAndCheckedIn") {
          this.message = "Bride, You Are Checked In.";
          let preReg = $('reg');
          preReg.css('background-color','#80cbc4');
        }


        this.email = "";
        this.numberOfGuest = "0";
        this.hearAbout = "Facebook";
        this.weddingDate;
        this.phone = "";
        this.name = "";

        let intervalId = setInterval(() => {
          let reg = $('reg');
          this.message = "";
          reg.css('background-color','');
        }, 4000);

      },
      err => console.log(err)
    );
  }

  ngOnInit() {

      $('#other').hide();
      $('select').material_select();

   /* $('#howDidYouHearAboutUs').change(function () {
      if ($(this).val() == "other") {
        $('#hearAboutUs').hide();
        $('#other').show();
      }
    });*/

    $('#phone').mask('(000) 000-0000');


  }
}
