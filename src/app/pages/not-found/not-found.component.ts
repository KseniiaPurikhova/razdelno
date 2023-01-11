import { Component } from '@angular/core';
import { ROUTS } from '@constants/routs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public ROUTS = ROUTS;
}
