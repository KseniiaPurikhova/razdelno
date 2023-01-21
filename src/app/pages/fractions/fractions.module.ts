import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FractionsRoutingModule } from '@pages/fractions/fractions-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FractionsRoutingModule],
  exports: [FractionsRoutingModule],
})
export class FractionsModule {}
