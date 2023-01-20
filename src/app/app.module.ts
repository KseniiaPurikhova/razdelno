import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ForthcomingEventComponent } from './pages/forthcoming-event/forthcoming-event.component';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AcceptanceGuideComponent } from './pages/acceptance-guide/acceptance-guide.component';
import { NavigationModule } from '@shared/components/navigation/navigation.module';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ForthcomingEventComponent,
    AcceptanceGuideComponent,
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
  ],
  exports: [AppRoutingModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
