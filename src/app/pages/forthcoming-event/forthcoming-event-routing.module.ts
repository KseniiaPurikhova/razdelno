import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForthcomingEventComponent } from "@pages/forthcoming-event/forthcoming-event.component";

const routes: Routes = [
  {
    path: '',
    component: ForthcomingEventComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForthcomingEventRoutingModule {}
