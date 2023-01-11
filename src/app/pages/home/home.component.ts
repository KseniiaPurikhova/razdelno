import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import { ROUTS } from '@constants/routs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public ROUTS = ROUTS;

  @HostBinding('class.app-home') public readonly hostClass = true; // not working without encapsulation: ViewEncapsulation.None

  // https://perishablepress.com/best-method-for-email-obfuscation/

}
