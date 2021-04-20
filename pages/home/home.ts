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
  FinancedAmount: number;
  FinancedAmountMessage: string;
  OldPhoneAppraised: number;
  OldPhoneAppraisedMessage: string;
InterestRate: any;
PaymentTerms: number;
  constructor(public navCtrl: NavController) {}
    calculateOldPhoneAppraised(){
    this.OldPhoneAppraised = (this.FinancedAmount*this.InterestRate)/this.PaymentTerms;
    this.OldPhoneAppraised = parseFloat(this.OldPhoneAppraised.toFixed(1));

    if (this.OldPhoneAppraised <18.5) {
      this.OldPhoneAppraisedMessage = "Old Phone Appraised Value";
    
    }
    }    
  calculateFinancialAmount(){
    this.FinancedAmount = this.Gadget - this.OldPhone;
    this.FinancedAmount = parseFloat(this.FinancedAmount.toFixed(2));

    if (this.FinancedAmount <18.5) {
      this.FinancedAmountMessage = "Financed Amount";
    
    }
  }
  

      
    
}
