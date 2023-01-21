import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForthcomingEventRoutingModule } from '@pages/forthcoming-event/forthcoming-event-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ForthcomingEventRoutingModule],
  exports: [ForthcomingEventRoutingModule],
})
export class ForthcomingEventModule {}
