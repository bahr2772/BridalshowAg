import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReportService {

  constructor(private http: Http) { }

  getReportList() {
    //let url = "http://localhost:8080/api/report";
    let url = "http://yknotplanning.com/api/report"
    return this.http.get(url, {withCredentials: true});
  }
}
