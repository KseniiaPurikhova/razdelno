import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForthcomingEventComponent } from './pages/forthcoming-event/forthcoming-event.component';
import { ROUTS } from '@constants/routs';

const routes: Routes = [
  { path: ROUTS.HOME, component: HomeComponent },
  { path: ROUTS.EVENT, component: ForthcomingEventComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
