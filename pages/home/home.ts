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
  bmi: number;
  bmiMessage: string;
 any;
InterestRate: number;
PaymentTerms: number;
  
  constructor(public navCtrl: NavController) {}

  calculateBMI(){
    this.bmi = (this.Financed*this.InterestRate/100)*this.PaymentTerms;
    this.bmi = parseFloat(this.bmi.toFixed(1));
    this.bmi = this.Gadget - this.OldPhone;
    this.bmi = parseFloat(this.bmi.toFixed(2));
    this.bmi = (this.Financed+this.InterestRate/100)/this.PaymentTerms;
    this.bmi = parseFloat(this.bmi.toFixed(3));

    if (this.bmi <18.5) {
      this.bmiMessage = "Old Appraised Value";
    } else if (this.bmi > 18.5 && this.bmi < 25) {
      this.bmiMessage = "Financed Amount";
    }else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiMessage = "Monthly Payment";
    }else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiMessage = "Old Appraised Value";
    } else {
      this.bmiMessage = "Financed Amount";
   {
      this.bmiMessage ="Monthly Payment;"
    }
    }
      
      
    
}
}