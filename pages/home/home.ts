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
    this.opav = (this.fa*this.ir/100)*this.pt;
    this.opav = parseFloat(this.opav.toFixed(2));

    this.fa= this.gp-this.opav;
    this.fa = parseFloat(this.fa.toFixed(2));
    
    this.mp= (this.fa+this.ir)/this.pt;
    this.mp = parseFloat(this.mp.toFixed(2));
    }
    }    