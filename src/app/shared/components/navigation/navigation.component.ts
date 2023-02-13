import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTS } from '@shared/constants/routs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  ROUTS = ROUTS;
}
