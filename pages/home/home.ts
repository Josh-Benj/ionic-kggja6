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
  opav2: number;
  pt: number;

  fa: number;
  ir: number;
  tip: number;
  mp: number;

  constructor(public navCtrl: NavController) {}
    calculateTTULC(){

    this.fa = this.gp-this.opav;
    this.fa = parseFloat(this.fa.toFixed(2));

    this.ir = 1.30;
    this.ir = parseFloat(this.ir.toFixed(2));

    this.tip = ((this.fa*this.ir)/100)*this.pt;
    this.tip = parseFloat(this.tip.toFixed(2));
    
    this.mp = (((this.fa*100)/100)+((this.tip*100)/100))/this.pt;
    this.mp = parseFloat(this.mp.toFixed(2));

    this.opav2 = this.opav;
    this.opav2 = parseFloat(this.opav2.toFixed(2));

    }
    }