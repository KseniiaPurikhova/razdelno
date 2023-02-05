import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FractionsRoutingModule } from '@pages/fractions/fractions-routing.module';
import { FractionsComponent } from '@pages/fractions/fractions.component';
import { FractionComponent } from '@pages/fractions/fraction/fraction.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FractionsComponent, FractionComponent],
  imports: [
    CommonModule,
    FractionsRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [FractionsRoutingModule],
})
export class FractionsModule {}
