import { Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BaseLayoutComponent {
  @HostBinding('class.app-base-layout') public readonly hostClass = true;
}
