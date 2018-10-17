import { Component } from '@angular/core';
import { AdminClass } from './admin-class';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';





@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  data: {};
  admin = new AdminClass();
  constructor(private toastr: ToastrService, private router: Router) {

  }

  items = [
      {
        id:1,
        name: "shirt1",
        type:"men",
        imgUrl:"men.png",
        subImg:["",""]
      },
      {
        id:2,
        name: "shirt2",
        type:"men",
        imgUrl:"men.png",
        subImg:["",""]
      },
      {
        id:3,
        name: "shirt3",
        type:"men",
        imgUrl:"men.png",
        subImg:["",""]
      },
      {
        id:4,
        name: "shirt4",
        type:"men",
        imgUrl:"men.png",
        subImg:["",""]
      },
      {
        id:5,
        name: "kurta1",
        type:"women",
        imgUrl:"women.png",
        subImg:["",""]
      },
      {
        id:6,
        name: "kurta2",
        type:"women",
        imgUrl:"women.png",
        subImg:["",""]
      },
      {
        id:7,
        name: "kurta3",
        type:"women",
        imgUrl:"women.png",
        subImg:["",""]
      },
      {
        id:8,
        name: "kurta4",
        type:"women",
        imgUrl:"women.png",
        subImg:["",""]
      }
  ];


  users=[
    {
      userId: 1,
      userName: "vinay",
      password: "vinay"
    },{
      userId:2,
      userName: "admin",
      password:"admin"
    }

  ];

  login() {
  
    let loggedIn = this.users.filter(
      obj => { return obj.userName == this.admin.userName && obj.password == this.admin.password;}
    );
  
    if(loggedIn.length){
      window.sessionStorage.setItem('sessionKey',JSON.stringify(loggedIn[0]["userId"]));
      window.sessionStorage.setItem('allItems',JSON.stringify(this.items));
      this.toastr.success('Login Successfully');
      this.router.navigate(['/home']);
    }
    else{
      this.toastr.error("Please Login With Correct Credentials");
    }
  }

  
   
}
