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
  OldPhoneAppraisedValue: number;
  OldPhoneAppraisedValueMessage: string;
  MonthlyPayment: number;
  MonthlyPaymentMessage: string;
InterestRate: any;
PaymentTerms: number;
OldPhoneAppraised: number;
  constructor(public navCtrl: NavController) {}
    calculateOldPhoneAppraisedValue(){
    this.OldPhoneAppraisedValue = (this.FinancedAmount*this.InterestRate)*this.PaymentTerms;
    this.OldPhoneAppraisedValue = parseFloat(this.OldPhoneAppraised.toFixed(1));

    if (this.OldPhoneAppraised <4000) {
      this.OldPhoneAppraisedValueMessage = "Old Phone Appraised Value";
    
    }
    }    
  calculateFinancedAmount(){
    this.FinancedAmount = this.Gadget - this.OldPhone;
    this.FinancedAmount = parseFloat(this.FinancedAmount.toFixed(2));

    if (this.FinancedAmount <26000) {
      this.FinancedAmountMessage = "Financed Amount";
    }
    }
    calculateMonthlyPayment(){
    this.MonthlyPayment = (this.FinancedAmount+this.InterestRate)/this.PaymentTerms;
    this.MonthlyPayment = parseFloat(this.MonthlyPayment.toFixed(3));

    if (this.MonthlyPayment <2504.66) {
      this.MonthlyPaymentMessage = "Monthly Payment";
}
    }
}