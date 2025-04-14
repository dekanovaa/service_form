import { Component, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../../src/app/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[CartService]
})
export class LoginComponent {
  constructor(private usersService: CartService, private router: Router) {}
  loginform = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  Submit() {
    if (
      this.loginform.value.name === this.usersService.users[1].name &&
      this.loginform.value.password === this.usersService.users[1].password
    ) {
      alert("zo'r");
      this.router.navigate(['home']);
    } else {
      alert('login yoki password xato');
    }
  }
}
