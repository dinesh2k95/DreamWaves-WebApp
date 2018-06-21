import {Component, ViewChild} from '@angular/core'
import {FormGroup, FormControl} from "@angular/forms";
import {Http, Headers, RequestOptionsArgs} from "@angular/http";

@Component({
  selector: 'create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private http: Http) {}
  @ViewChild('errorLog') errorLog;

  studentForm;
  private studentPostUrl = "http://localhost:8482/createStudent";
  errorMsg;

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      firstName: new FormControl(),
      secondName: new FormControl(),
      class: new FormControl(),
      section: new FormControl()
    });
      }

  onSubmit(formValues) {
    let formJson = JSON.stringify(formValues);
    console.log(formJson);
    let header = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  })
  let requestOptions: RequestOptionsArgs = ({headers: header})
    this.http.post(this.studentPostUrl, formJson, requestOptions)
      .toPromise()
      .then(response => {this.errorMsg = response.text()
      console.log(response.text())})
      .catch(error => this.errorMsg = error.message)
      console.log(requestOptions);
  }

}
