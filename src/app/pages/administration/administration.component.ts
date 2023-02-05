import { Component } from '@angular/core';
import { ADMIN_ROUTS } from "@constants/routs";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  ROUTS = ADMIN_ROUTS;
}
