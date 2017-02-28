"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PreRegComponent = (function () {
    function PreRegComponent(checkinService) {
        this.checkinService = checkinService;
        this.numberOfGuest = '0';
    }
    PreRegComponent.prototype.checkin = function () {
        var _this = this;
        this.checkinService.checkIn(this.email, this.numberOfGuest).subscribe(function (res) {
            console.log(res);
            if (res.statusText = "success")
                console.log("success");
            _this.message = res.text();
            if (_this.message === "AlreadyCheckedIn") {
                _this.message = "You Are Already Checked In, If this is an error please see a staff member.";
                var preReg = document.getElementById('preReg');
                preReg.style.backgroundColor = '#ef9a9a ';
            }
            else if (_this.message === "checkedIn") {
                _this.message = "Bride, You Are Checked In.";
                var preReg = document.getElementById('preReg');
                preReg.style.backgroundColor = '#80cbc4';
            }
            else if (_this.message === "notFound") {
                _this.message = "Bride Sorry We Can't Find You. Please Register.";
                var preReg = document.getElementById('preReg');
                preReg.style.backgroundColor = '#ffc107';
            }
        }, function (err) { return console.log(err); });
        var intervalId = setInterval(function () {
            var preReg = document.getElementById('preReg');
            _this.message = "";
            preReg.style.backgroundColor = '';
        }, 4000);
        this.email = "";
        this.numberOfGuest = "0";
    };
    PreRegComponent.prototype.ngOnInit = function () {
    };
    PreRegComponent = __decorate([
        core_1.Component({
            selector: 'app-pre-reg',
            templateUrl: './pre-reg.component.html',
            styleUrls: ['./pre-reg.component.css']
        })
    ], PreRegComponent);
    return PreRegComponent;
}());
exports.PreRegComponent = PreRegComponent;
