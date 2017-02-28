"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CheckinService = (function () {
    function CheckinService(http) {
        this.http = http;
    }
    CheckinService.prototype.checkIn = function (email, numberOfGuest) {
        var url = "http://yknotplanning.com/api/checkUser?email=" + email + "&numberOfGuest=" + numberOfGuest;
        var params = "email=" + email + "numberOfGuest=" + numberOfGuest;
        console.log(params);
        console.log("Email: " + email);
        console.log("Number Of Guest [" + numberOfGuest + "]");
        return this.http.post(url, params);
    };
    CheckinService = __decorate([
        core_1.Injectable()
    ], CheckinService);
    return CheckinService;
}());
exports.CheckinService = CheckinService;
