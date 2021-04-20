import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  Gadget: number;
  OldPhone: number;
  FinancialAmount: number;
  FinancialAmountMessage: string;
  OldPhoneAppraised: number;
  OldPhoneAppraisedMessage: string;
InterestRate: any;
PaymentTerms: number;
  constructor(public navCtrl: NavController) {}

  calculateFinancialAmount(){
    this.FinancialAmount = this.Gadget - this.OldPhone;
    this.FinancialAmount = parseFloat(this.FinancialAmount.toFixed(2));

    if (this.FinancialAmount <18.5) {
      this.FinancialAmountMessage = "Old Phone Appraised Value";
    } else if (this.FinancialAmount > 18.5 && this.FinancialAmount < 25) {
      this.FinancialAmountMessage = "Financed Amount";
    }else if (this.FinancialAmount >= 25 && this.FinancialAmount < 30) {
    }
  }
  
    calculateOldPhoneAppraised(){
    this.OldPhoneAppraised = (this.FinancialAmount*this.InterestRate)/this.PaymentTerms;
    this.OldPhoneAppraised = parseFloat(this.FinancialAmount.toFixed(2));

    if (this.OldPhoneAppraised <18.5) {
      this.OldPhoneAppraisedMessage = "Old Phone Appraised Value";
    } else if (this.OldPhoneAppraised > 18.5 && this.OldPhoneAppraised < 25) {
      this.OldPhoneAppraisedMessage = "Financed Amount";
    }else if (this.OldPhoneAppraised >= 25 && this.OldPhoneAppraised < 30) {
    }
    }    
      
    
}
