import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTS } from '@constants/routs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  ROUTS = ROUTS;
  // https://perishablepress.com/best-method-for-email-obfuscation/
}
