import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin-offcanvas',
  templateUrl: './signin-offcanvas.component.html',
  styleUrls: ['./signin-offcanvas.component.css'],
})
export class SigninOffcanvasComponent implements OnInit {
  public email:any;
  public password:any;
  public isValid = true;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

   public login() {
    return this.loginService.login(this.email, this.password)
    .then((res) => {
        return this.router.navigate(['/home']);
    })
    .catch((err) => {
        this.isValid = false;
    });
  }
}
