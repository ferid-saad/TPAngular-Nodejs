import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Appareil } from '../models/appareil.model';

@Component({
  selector: 'app-appareil-dashboard',
  templateUrl: './appareil-dashboard.component.html',
  styleUrl: './appareil-dashboard.component.css'
})
export class AppareilDashboardComponent {


  constructor(private appareilService: AppareilService) {}


}
