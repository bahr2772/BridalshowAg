/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var checkin_service_1 = require('./checkin.service');
describe('CheckinService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [checkin_service_1.CheckinService]
        });
    });
    it('should ...', testing_1.inject([checkin_service_1.CheckinService], function (service) {
        expect(service).toBeTruthy();
    }));
});
