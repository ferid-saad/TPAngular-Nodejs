import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.css'
})
export class AppareilComponent {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;

  getStatus() {
    return this.appareilStatus; // Méthode qui retourne le statut actuel.
  }

  onAllumer() {
    this.appareilStatus = 'Allumé'; // Change le statut à "Allumé".
    console.log(`${this.appareilName} est maintenant ${this.appareilStatus}`); // Affiche un message dans la console.
  }

  onEteindre() {
    this.appareilStatus = 'Eteint'; // Change le statut à "Allumé".
    console.log(`${this.appareilName} est maintenant ${this.appareilStatus}`); // Affiche un message dans la console.
  }
}

