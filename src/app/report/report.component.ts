import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ReportService } from "../report.service";

declare let $:any;
declare var require: any

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportList: Object[];
  totalGuest = 0;
  numPreReg = 0;
  numHeardFromFb = 0;
  numHeardFromRadio = 0;
  numHeardFromVendor = 0;
  numHeardFromNewpaper = 0;
  numHeardFromFF = 0;
  numHeardFromOther = 0;
  numWalkIn = 0;

  fs = require('fs');
  json2csv = require('json2csv');

  fields = ['name', 'email', 'weddingDate'];




  constructor(private route: Router, private reportService: ReportService) {
    this.getReportList();
  }

  getReportList(){
    this.reportService.getReportList().subscribe(
      res => {
        this.reportList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        this.runReportDetails();
      },
      error => console.log(error)
    )
  }

  runReportDetails(){
    for (var i =0; i < this.reportList.length; i++){

      if ( this.reportList[i]['numberOfGuest'] !== null)
        this.totalGuest += parseInt(this.reportList[i]['numberOfGuest']);

/////////////
      if ( this.reportList[i]['howDidYouHear'] !== null) {
        if (this.reportList[i]['howDidYouHear'].toUpperCase().includes("Facebook".toUpperCase()))
          this.numHeardFromFb++;
        else if (this.reportList[i]['howDidYouHear'].toUpperCase().includes("Newspaper".toUpperCase()))
          this.numHeardFromNewpaper++;
        else if (this.reportList[i]['howDidYouHear'].toUpperCase().includes("Wedding Vendor".toUpperCase()))
          this.numHeardFromVendor++;
        else if (this.reportList[i]['howDidYouHear'].toUpperCase().includes("Radio".toUpperCase()))
          this.numHeardFromRadio++;
        else if (this.reportList[i]['howDidYouHear'].toUpperCase().includes("Friend".toUpperCase()))
          this.numHeardFromFF++;
        else
          this.numHeardFromOther++;
      }
   //////////////
        if (this.reportList[i]['preRegistered'] === true)
          this.numPreReg++;
        else
          this.numWalkIn++;

    }
    console.log("Total Guest: "+this.totalGuest);

  }


  ngOnInit() {
    $('#reportDetails').hide();

  }

}
