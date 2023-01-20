import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, MatIconModule, RouterLink, MatMenuModule, MatButtonModule],
})
export class NavigationModule {}
