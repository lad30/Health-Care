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
        text: 'Message alert to a patient when doctor updates patient record.'
      },
      {
        text: 'Lab reports will be present in specific format.'
      },
      {
        text: 'Digital record of patient'
      },
      {
        text: 'Doctor/Lab will upload records as patient can only view records.'
      },
      {
        text: 'Fraud Medication will be minimised.'
      },
      {
        text: 'Easy access to all documents by doctors as well as patients'
      },
      {
        text: '24/7 Availability of Medical records.'
      },
      {
        text: 'Side effects and allergies will be showcased easily.'
      },
      {
        text: 'Secured and tampered proof medical records.'
      },
      {
        text: 'Search option for related disease and medication of patients current problems for easy access.'
      }
    ]
  }

}
