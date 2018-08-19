import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor( private http: Http) { }

  confirmationString:string = "New User has been added";
  isAdded:boolean = false;
  id:number;
  private headers = new Headers({"Content-Type" : "application/json"});
  

  users = [];
  userObj:object = {};

  fetchData = function(){
    this.http.get('http://localhost:5555/users').subscribe(
      (res: Response) => {
        this.users = res.json();
      }
    )
  }

 

  addNewUser = function(user){
    this.userObj = {
      'firstName' : user.firstName,
      'lastName': user.lastName,
      'email' : user.email
    }
    this.http.post('http://localhost:5555/users', this.userObj).subscribe(
      (res: Response) => {
        console.log(res);
        this.isAdded = true;      
      }
    )
  }

 

  // deleteUser = function(id) {
  //   if(confirm('Are you Sure?')){
  //     // const url = `$ {"http://localhost:5555/users"}/$ {id}`;
  //     this.http.delete('http://localhost:5555/users'/this.id).subscribe(() => {
  //       this.fetchData();
  //     })
  //   }
  // }

  ngOnInit() {
    this.fetchData();
  }

}
