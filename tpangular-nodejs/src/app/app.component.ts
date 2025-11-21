import { AppModule } from './app.module';
import { AppareilComponent } from './appareil/appareil.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'tpangular-nodejs';

  appareilList = [
    { name: 'Machine à laver', status: 'Eteint' },
    { name: 'Tv', status: 'Allumé' },
    { name: 'Climatiseur', status: 'Eteint' },
    { name: 'PC', status: 'Allumé' },
    { name: 'Micro onde', status: 'Eteint' },
    { name: 'Four', status: 'Allumé' },
    { name: 'Aspirateur', status: 'Eteint' }
  ];

  isDisabled = true; // Variable pour désactiver le bouton "Allumer tout" au départ.

  constructor() {
    // Active le bouton après 4 secondes grâce à setTimeout.
    setTimeout(() => {
      this.isDisabled = false;
    }, 4000);
  }

  onAllumerTout() {
    console.log('Tous les appareils sont allumés !'); // Affiche un message dans la console.
    this.appareilList.forEach(appareil => appareil.status = 'Allumé'); // Change le statut de tous les appareils.
  }

  onEteindreTout() {
    console.log('Tous les appareils sont allumés !'); // Affiche un message dans la console.
    this.appareilList.forEach(appareil => appareil.status = 'Eteint'); // Change le statut de tous les appareils.
  }
  OnAllumer(i: number) {
    this.appareilList[i].status = 'Allumé';
  }

  OnEteindre(index: number) {
    this.appareilList[index].status = 'Eteint';
  }
  appareilName = ''; // Variable liée à l'input

}
