import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrls: ['./pregnancy.component.scss']
})
export class PregnancyComponent {

  public $formProperty = {
    animalType  : "dog",
    when        : "before"
  };

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


  public $ui = {
    fetusAge          : 0,
    daysBeforeTermin  : 0
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public selectAnimalType($event: any) {
    this.$formProperty.animalType = ($event.detail.checked) ? 'cat' : 'dog';
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public selectWhenType($event: any) {
    this.$formProperty.when = ($event.detail.checked) ? 'after' : 'before';
  }

  public processCalculation() {

    if(this.$formProperty.animalType == 'dog' && this.$formProperty.when == 'before') {

      this.GAB1  = Math.round(((6 * this.GSD) + 20) *100) / 100;
      this.GAB2  = Math.round(((3 * this.CRL) + 27) *100) / 100;
      this.GAB   = Math.round(((this.GAB1 + this.GAB2) /2) * 100) / 100;
      this.DBP1  = Math.round((61 - this.GAB) * 100) / 100;

      this.$ui.fetusAge         = this.GAB;
      this.$ui.daysBeforeTermin = this.DBP1;
    }

    if(this.$formProperty.animalType == 'dog' && this.$formProperty.when == 'after') {

      this.GAA1  = Math.round(((15 * this.HD) + 20) *100) /100;
      this.GAA2  = Math.round(((7 * this.BD) + 29) *100) /100;
      this.GAA3  = Math.round(((6 * this.HD) + (3 * this.BD) + 30) *100) /100;
      this.GAA   = Math.round(((this.GAA1 + this.GAA2 + this.GAA3) /3) *100) /100;
      this.DBP2  = Math.round((61 - this.GAA)*100)/100;

      this.$ui.fetusAge         = this.GAA;
      this.$ui.daysBeforeTermin = this.DBP2;
    }
  }
}
