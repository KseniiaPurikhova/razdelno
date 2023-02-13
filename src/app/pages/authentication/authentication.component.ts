import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AuthService } from '@services/http/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: 'loginLoading',
      useValue: new ReplaySubject(1),
    },
  ],
})
export class AuthenticationComponent {
  passVisible = false;
  readonly loginFormGroup: FormGroup;
  constructor(
    @Inject('loginLoading')
    public loginLoading$: ReplaySubject<boolean>,

    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    console.log('EnterComponent');
    this.loginFormGroup = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.loginLoading$.next(false);
  }

  getErrorMessage(controlName: string): string {
    // todo
    return '';
  }

  changeVisible() {
    this.passVisible = !this.passVisible;
  }

  login() {
    const val = this.loginFormGroup.value;
    if (val.login && val.password) {
      this.authService.login(val.login, val.password).subscribe(() => {
        console.log('User is logged in');
        this.router.navigateByUrl('/').then();
      });
    }
  }

  forgotPassword() {}

  toggleRememberMe() {
    // использование cookie
    // см. https://leadplan.ru/blog/shtraf-za-kuki
  }
}
