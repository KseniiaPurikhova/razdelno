import { Component, Input } from '@angular/core';
import { ROUTS } from '@shared/constants/routs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input()
  public path: string[] | undefined;
  public ROUTS = ROUTS;
}
