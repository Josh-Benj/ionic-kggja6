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
  
  constructor(public navCtrl: NavController) {}

  calculateBMI(){
    this.bmi = this.Gadget - this.OldPhone;
    this.bmi = parseFloat(this.bmi.toFixed(2));

    if (this.bmi <18.5) {
      this.bmiMessage = "Old Phone Appraised Value";
    } else if (this.bmi > 18.5 && this.bmi < 25) {
      this.bmiMessage = "Financed Amount";
    }else if (this.bmi >= 25 && this.bmi < 30) {
    }
      
      
    
}
}