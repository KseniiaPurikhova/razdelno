import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from '@pages/administration/administration.component';
import { LocationsComponent } from '@pages/administration/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
