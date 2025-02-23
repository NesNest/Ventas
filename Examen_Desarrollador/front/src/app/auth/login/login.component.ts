import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/authServices/user.service';
import { Router, RouterModule } from '@angular/router';
import { RequestService } from '../../services/authServices/request.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      const requestData: RequestService = {
        email: username,
        password: password
      };
      this.userService.authenticateUser(requestData).subscribe(
        response => {
          this.userService.setUserLogged(true);
          this.router.navigate(['/']);

        }

      )
    }
    else {
      console.error('Invalid credentials');
    }

  }
}
