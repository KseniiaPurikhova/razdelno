import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from "@layouts/base-layout/base-layout.component";
import { HomeComponent } from "@pages/home/home.component";
import { ForthcomingEventComponent } from "@pages/forthcoming-event/forthcoming-event.component";
import { NotFoundComponent } from "@pages/not-found/not-found.component";
import { FractionsComponent } from '@pages/fractions/fractions.component';
import { FractionComponent } from '@pages/fractions/fraction/fraction.component';
import { NavigationModule } from '@shared/components/navigation/navigation.module';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ForthcomingEventComponent,
    FractionsComponent,
    FractionComponent,
    BaseLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NavigationModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AppRoutingModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
