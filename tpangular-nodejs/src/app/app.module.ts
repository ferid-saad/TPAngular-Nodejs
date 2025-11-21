import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { AppareilDashboardComponent } from './appareil-dashboard/appareil-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AppareilComponent,
    AuthentifComponent,
    AppareilDashboardComponent,
    WelcomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Appareil {
name: string;
statut: string;
constructor(name: string, statut: string) {
this.name = name;
this.statut = statut;
}
}
