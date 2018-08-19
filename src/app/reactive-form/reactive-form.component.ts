import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  rForm:FormGroup;
  post:any;     //A property for our submitted Form
  description:string = '';
  name:string = '';
  titleAlert:string = 'This is required.';


  constructor(private fb:FormBuilder) {
    this.rForm = fb.group({
      'name' : [null,Validators.required],
      'description' : [null, Validators.compose([Validators.required , Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if(validate == '1') {
          this.rForm.get('name').setValidators([Validators.required , Validators.minLength(3)] );
          this.titleAlert = "You need to specify atleast 3 characters";
        }
        else{
          this.rForm.get('name').setValidators([Validators.required]);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }
  
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

}
