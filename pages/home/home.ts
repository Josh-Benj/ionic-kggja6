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
  bmi: number;
  bmiMessage: string;
Gadget: any;
  
  constructor(public navCtrl: NavController) {}

  calculateBMI(){
    this.bmi = this.Gadget - this.OldPhone;
    this.bmi = parseFloat(this.bmi.toFixed(2));

    if (this.bmi <18.5) {
      this.bmiMessage = "Financed Amount";
    } else if (this.bmi > 26) {
      this.bmiMessage = "Financed Amount";
    }else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiMessage = "Overweight";
    } else {
      this.bmiMessage = "Obese";
    }
      
      
    
}
}