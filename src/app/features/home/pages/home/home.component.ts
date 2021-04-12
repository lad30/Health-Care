import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  objectives: any[];

  constructor() { }

  ngOnInit() {
    this.setObjectives();
  }

  setObjectives(){
    this.objectives = [
      {
        icon: 'lni lni-users',
        text: 'Message alert to a patient when doctor updates patient record.'
      },
      {
        icon: 'lni lni-remove-file',
        text: 'Lab reports will be present in specific format.'
      },
      {
        icon: 'lni lni-laptop',
        text: 'Digital record of patient'
      },
      {
        icon: 'lni lni-sthethoscope',
        text: 'Doctor/Lab will upload records as patient can only view records.'
      },
      {
        icon: 'lni lni-stats-down',
        text: 'Fraud Medication will be minimised.'
      },
      {
        icon: 'lni lni-popup',
        text: 'Easy access to all documents by doctors as well as patients'
      },
      {
        icon: 'lni lni-headphone-alt',
        text: '24/7 Availability of Medical records.'
      },
      {
        icon: 'lni lni-hospital',
        text: 'Side effects and allergies will be showcased easily.'
      },
      {
        icon: 'lni lni-lock-alt',
        text: 'Secured and tampered proof medical records.'
      },
      {
        icon: 'lni lni-search-alt',
        text: 'Search option for related disease and medication of patients current problems for easy access.'
      }
    ]
  }

}
