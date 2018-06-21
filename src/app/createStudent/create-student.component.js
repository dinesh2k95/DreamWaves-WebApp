"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var CreateStudentComponent = (function () {
    function CreateStudentComponent(http) {
        this.http = http;
        this.studentPostUrl = "http://localhost:8482/createStudent";
    }
    CreateStudentComponent.prototype.ngOnInit = function () {
        this.studentForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            secondName: new forms_1.FormControl(),
            class: new forms_1.FormControl(),
            section: new forms_1.FormControl()
        });
    };
    CreateStudentComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        var formJson = JSON.stringify(formValues);
        console.log(formJson);
        var header = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var requestOptions = ({ headers: header });
        this.http.post(this.studentPostUrl, formJson, requestOptions)
            .toPromise()
            .then(function (response) {
            _this.errorMsg = response.text();
            console.log(response.text());
        })
            .catch(function (error) { return _this.errorMsg = error.message; });
        console.log(requestOptions);
    };
    return CreateStudentComponent;
}());
__decorate([
    core_1.ViewChild('errorLog')
], CreateStudentComponent.prototype, "errorLog", void 0);
CreateStudentComponent = __decorate([
    core_1.Component({
        selector: 'create-student',
        templateUrl: './create-student.component.html',
        styleUrls: ['./create-student.component.css']
    })
], CreateStudentComponent);
exports.CreateStudentComponent = CreateStudentComponent;
