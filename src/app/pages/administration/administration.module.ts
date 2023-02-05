import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from '@pages/administration/administration-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AdministrationComponent } from '@pages/administration/administration.component';
import { LocationsComponent } from '@pages/administration/locations/locations.component';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { LocationComponent } from './location/location.component';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [AdministrationComponent, LocationsComponent, LocationComponent],
  imports: [CommonModule, AdministrationRoutingModule, MatButtonModule, MatIconModule, MatInputModule, MatDividerModule],
  exports: [AdministrationRoutingModule],
})
export class AdministrationModule {}
