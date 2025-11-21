import { Injectable } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
apiUrl = "http://localhost:3001/api/appareils/";
  
appareils = [
  { name: 'Machine à laver', status: 'éteint' },
  { name: 'Tv',               status: 'allumé' },
  { name: 'Climatiseur',      status: 'éteint' },
  { name: 'PC',               status: 'allumé' },
  { name: 'Micro onde',       status: 'éteint' },
  { name: 'Four',             status: 'allumé' },
  { name: 'Aspirateur',       status: 'éteint' },
];


  constructor() { }
}
