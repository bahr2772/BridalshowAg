"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (email, name, phone, weddingDate, howDidyouHearAbout, numberOfGuest) {
        var url = "http://www.yknotplanning.com/api/registerBride"
            + "?email=" + email
            + "&numberOfGuest=" + numberOfGuest
            + "&name=" + name
            + "&phone=" + phone
            + "&howDidyouHearAbout=" + howDidyouHearAbout
            + "&weddingDate=" + weddingDate;
        var params = "";
        console.log(url);
        console.log("Hear about: " + howDidyouHearAbout);
        console.log("Email: " + email);
        console.log("Number Of Guest [" + numberOfGuest + "]");
        return this.http.post(url, params);
    };
    RegisterService = __decorate([
        core_1.Injectable()
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
