"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.numberOfGuest = "0";
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.registerService.register(this.email, this.name, this.phone, this.weddingDate.toDateString(), $('#howDidYouHearAboutUs').val(), this.numberOfGuest).subscribe(function (res) {
            console.log(res);
            if (res.statusText = "success")
                console.log("success");
            _this.message = res.text();
            if (_this.message === "brideFound") {
                _this.message = "You Are Already Checked In, If this is an error please see a staff member.";
                var preReg = document.getElementById('reg');
                preReg.style.backgroundColor = '#ef9a9a ';
            }
            else if (_this.message === "brideSaved") {
                _this.message = "Bride, You Are Checked In.";
                var preReg = document.getElementById('reg');
                preReg.style.backgroundColor = '#80cbc4';
            }
            else if (_this.message === "brideFoundAndCheckedIn") {
                _this.message = "Bride, You Are Checked In.";
                var preReg = document.getElementById('reg');
                preReg.style.backgroundColor = '#80cbc4';
            }
            _this.email = "";
            _this.numberOfGuest = "0";
            _this.hearAbout = "Facebook";
            _this.weddingDate;
            _this.phone = "";
            _this.name = "";
            var intervalId = setInterval(function () {
                var reg = document.getElementById('reg');
                _this.message = "";
                reg.style.backgroundColor = '';
            }, 4000);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#other').hide();
            $('select').material_select();
        });
        $('#howDidYouHearAboutUs').change(function () {
            if ($(this).val() == "other") {
                $('#hearAboutUs').hide();
                $('#other').show();
            }
        });
        $('#phone').mask('(000) 000-0000');
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
