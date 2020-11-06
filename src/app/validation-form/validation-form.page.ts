import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.page.html',
  styleUrls: ['./validation-form.page.scss'],
})

export class ValidationFormPage implements OnInit {
  rForm: FormGroup;
  post: any;
  name: string;
  description: string;
  error = {
    message: [
      { type: 'required', message: 'Is required.' },
      { type: 'minlength', message: 'Must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Cannot be more than 250 characters long.' },
      { type: 'pattern', message: 'Must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ]};


  constructor(private  fb: FormBuilder) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      description: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(250)])],
      validate: [null, Validators.requiredTrue],
      select: [null, Validators.required]
    });
  }

  addPost(post) {
    this.name = post.name;
    this.description = post.description;
  }
  removePost(){
    this.name = null;
    this.description = null;
    this.rForm.reset();
  }
  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
        (validate) => {
          if (validate) {
            this.rForm.get('name').setValidators([Validators.required, Validators.minLength(5)]);
          }else {
            this.rForm.get('name').setValidators(Validators.required);
          }
          this.rForm.get('name').updateValueAndValidity();
        }
    );
  }

}

