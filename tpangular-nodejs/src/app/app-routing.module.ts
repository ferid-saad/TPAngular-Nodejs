import { AuthentifComponent } from './authentif/authentif.component';
import { AppareilDashboardComponent } from './appareil-dashboard/appareil-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremierComponent } from './premier/premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'premier', component: PremierComponent },
  { path: 'appareil', component: AppareilComponent },
  { path: "home", component: WelcomeComponent },
  { path: "appareils", component: AppareilDashboardComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: AuthentifComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
