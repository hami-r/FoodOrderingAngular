import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = ""
  password = ""

  userLogin = () => {
    let data: any = {
      "username": this.username,
      "password": this.password
    }
    console.log(data);

    if(this.username == "admin" && this.password == "12345"){
      alert("login valid")
    } else {
      alert("Invalid credentials")
    }
    
  }
}
