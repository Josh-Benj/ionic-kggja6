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
  Financed: number;
  OldPhoneAppraised: number;
  OldPhoneAppraisedMessage: string;
  FinancedAmount: number;
  FinancedAmountMessage: string;
 
InterestRate: number;
PaymentTerms: number;


  
  constructor(public navCtrl: NavController) {}
calculateOldPhoneAppraised(){
    this.OldPhoneAppraised = (this.Financed*this.InterestRate/100)*this.PaymentTerms;
    this.OldPhoneAppraised = parseFloat(this.OldPhoneAppraised.toFixed(1));
    
   
    if (this.OldPhoneAppraised <18.5) {
      this.OldPhoneAppraisedMessage = "Old Appraised Value";
    } else if (this.OldPhoneAppraised > 18.5 && this.OldPhoneAppraised < 25) {
      this.OldPhoneAppraisedMessage = "OldPhoneAppraised";
    }else if (this.OldPhoneAppraised >= 25 && this.OldPhoneAppraised< 30) {
    }
      
    
          
    
}
  calculateFinancedAmount(){
    this.FinancedAmount = this.Gadget - this.OldPhone;
    this.FinancedAmount = parseFloat(this.FinancedAmount.toFixed(2));
   
   if (this.FinancedAmount <18.5) {
      this.FinancedAmountMessage = "FinancedAmount";
    } else if (this.FinancedAmount > 18.5 && this.FinancedAmount < 25) {
      this.FinancedAmountMessage = "FinancedAmount";
    }else if (this.FinancedAmount >= 25 && this.FinancedAmount < 30) {
    }
      
      
      
    
}
}