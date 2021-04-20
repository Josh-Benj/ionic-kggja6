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
  FinancialAccount: number;
  FinancialAccountMessage: string;
  
  constructor(public navCtrl: NavController) {}

  calculateFinancialAccount(){
    this.FinancialAccount = this.Gadget - this.OldPhone;
    this.FinancialAccount = parseFloat(this.FinancialAccount.toFixed(2));

    if (this.FinancialAccount <18.5) {
      this.FinancialAccountMessage = "Old Phone Appraised Value";
    } else if (this.FinancialAccount > 18.5 && this.FinancialAccount < 25) {
      this.FinancialAccountMessage = "Financed Amount";
    }else if (this.FinancialAccount >= 25 && this.FinancialAccount < 30) {
    }
      
      
    
}
}