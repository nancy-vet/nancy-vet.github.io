import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrls: ['./pregnancy.component.scss']
})
export class PregnancyComponent {

  public GSD: number = 0;
  public CRL: number = 0;
  public HD: number = 0;
  public BD: number = 0;

  public GAB: any;
  public GAB1: any;
  public GAB2: any;

  public GAA: any;
  public GAA1: any;
  public GAA2: any;
  public GAA3: any;

  public DBP1: any;
  public DBP2: any;

  public processCalculation() {

    this.GAB1  = Math.round(((6 * this.GSD) + 20) *100) /100;
    this.GAB2  = Math.round(((3 * this.CRL) + 27) *100) /100;
    this.GAB  = Math.round(((this.GAB1 + this.GAB2) /2)*100)/100;

    console.log(this.GAB1);
    console.log(this.GAB2);
    console.log(this.GAB);

    this.GAA1  = Math.round(((15 * this.HD) + 20) *100) /100;
    this.GAA2  = Math.round(((7 * this.BD) + 29) *100) /100;
    this.GAA3  = Math.round(((6 * this.HD) + (3 * this.BD) + 30) *100) /100;
    this.GAA   = Math.round(((this.GAA1 + this.GAA2 + this.GAA3) /3) *100) /100;

    this.DBP1  = Math.round((61 - this.GAB)*100)/100;
    this.DBP2  = Math.round((61 - this.GAA)*100)/100;
  }
}
