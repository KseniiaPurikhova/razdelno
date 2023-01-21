import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTS } from '@constants/routs';
import { BaseLayoutComponent } from "@layouts/base-layout/base-layout.component";
import { HomeComponent } from '@pages/home/home.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const routes: Routes = [
  { path: ROUTS.HOME, component: HomeComponent },
  {
    path: ROUTS.EVENT,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('@pages/forthcoming-event/forthcoming-event.module').then(
        (m) => m.ForthcomingEventModule
      ),
  },
  {
    path: ROUTS.FRACTIONS,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('@pages/fractions/fractions.module').then(
        (m) => m.FractionsModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
