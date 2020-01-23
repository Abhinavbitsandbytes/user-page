import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isFormEdited:boolean
  constructor(private _formBuilder: FormBuilder) {
    this.profileForm = this._formBuilder.group({
      name: ['Abhinav Kumar Gupta',],
      mobile: ['9999999999', [Validators.pattern('[1-9][0-9]{9}')]],
      email:['abhinavkr197@gmail.com', [Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]]
    });
   }

  ngOnInit() {
    console.log("profileForm", this.profileForm);
  }
  url ;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  login(){
    if(this.profileForm.valid)
    this.isFormEdited=!this.isFormEdited
  }
}
