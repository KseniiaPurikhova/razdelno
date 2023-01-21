import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ROUTS } from '@shared/constants/routs';

@Component({
  selector: 'app-fractions',
  templateUrl: './fractions.component.html',
  styleUrls: ['./fractions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FractionsComponent {
  @HostBinding('class.app-fractions') public readonly hostClass = true;
  public ROUTS = ROUTS;
  public search = '';
}
