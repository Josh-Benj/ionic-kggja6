import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  gp: number;
  opav: number;
  pt: number;
  fa: number;
  ir: number;
  tip: number;
  mp: number;

  constructor(public navCtrl: NavController) {}
    calculateOldPhoneAppraisedValue(){
    variables.OldPhoneAppraisedValue = (variables.FinancedAmount*variables.InterestRate)*variables.PaymentTerms;
    variables.OldPhoneAppraisedValue = parseFloat(variables.OldPhoneAppraisedValue.toFixed(2));

    
    }
    }    