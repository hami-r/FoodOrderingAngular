import { compileFactoryFunction } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = ""
  phoneNo = ""
  email = ""
  username = ""
  password = ""
  confirmPassword = ""

  userRegister = () => {
    let data:any = {
      "name":this.name,
      "phoneNo":this.phoneNo,
      "email":this.email,
      "username":this.username,
      "password":this.password,
      "confirmPassword":compileFactoryFunction
    }
    console.log(data);
    if(this.password != this.confirmPassword){
      alert("Passwords do not match")
    }
  }

}
