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
  url:any ;
  constructor(private _formBuilder: FormBuilder) {
    this.profileForm = this._formBuilder.group({
      name: ['Abhinav Kumar Gupta',],
      mobile: ['9999999999', [Validators.pattern('[1-9][0-9]{9}')]],
      email:['abhinavkr197@gmail.com', [Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]]
    });
   }
  ngOnInit() {
    this.getFromLocalStorage()
    this.url=(localStorage.getItem("img"))?(localStorage.getItem("img")) : "https://www.w3schools.com/howto/img_avatar.png"
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.url = event.target['result'];
        localStorage.setItem('img', this.url)
      }
    }
  }
  login(){
    if(this.profileForm.valid)
    this.isFormEdited=!this.isFormEdited
  }
  makeDataForLocalStorage(form) {
    const dataForLocalStorage = {};
    for (const key in form.value) {
      dataForLocalStorage[key] = form.get(key).value;
    }
    return dataForLocalStorage;
  }
  setInLocalStorage() {
    const profileForm = this.makeDataForLocalStorage(this.profileForm);
    localStorage.setItem('profileFormData', JSON.stringify(profileForm));
  }
  getFromLocalStorage() {
    if (localStorage.getItem('profileFormData')) {
      const data = JSON.parse(localStorage.getItem('profileFormData'));
      this.profileForm.patchValue(data);
    }
  }
}
