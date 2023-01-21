import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FractionsComponent } from '@pages/fractions/fractions.component';
import { FractionComponent } from '@pages/fractions/fraction/fraction.component';

const routes: Routes = [
  {
    path: '',
    component: FractionsComponent,
  },
  {
    path: ':id',
    component: FractionComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FractionsRoutingModule {}
