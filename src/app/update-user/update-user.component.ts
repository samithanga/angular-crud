import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute, private http: Http) { }

  confirmationString:string = "User has been updated";
  isAdded:boolean = false;
  id:number;
  private headers = new Headers({"Content-Type" : "application/json"});
  
  data:object = {};
  users = [];
  userObj:object = {};

  updateUser = function(user){
   this.userObj = {
     "firstName" : 'user.firstName',
     "lastName" : 'user.lastName',
     "email" : 'user.email'
   };
   const url = `$ {"http://localhost:5555/users"}/${this.id}`;
   this.http.put(url, JSON.stringify(this.userObj), {headers : this.headers})
   .toPromise()
   .then(() =>{
      this.router.navigate(['/crud']);
   })
  }


  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    this.http.get('http://localhost:5555/users').subscribe(
      (res: Response) => {
        this.users = res.json();
        for(var i=0; i < this.users.length; i++){
          if(parseInt(this.users[i].id) === this.id){
            this.data = this.users[i];
            break;
          }
        }
      }
    )
  }

}
