import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prostate',
  templateUrl: './prostate.component.html',
  styleUrls: ['./prostate.component.scss']
})
export class ProstateComponent {

  public age: number = 0;
  public weight: number = 0;

  public L: any;
  public W: any;
  public Hsag: any;
  public Htr: any;
  public V: any;

  public processCalculation() {

    this.L    = (0.055 * this.weight) + (0.143 * this.age) + 3.31;
    this.W    = (0.047 * this.weight) + (0.089 * this.age) + 3.45;
    this.Hsag = (0.046 * this.weight) + (0.069 * this.age) + 2.68;
    this.Htr  = (0.044 * this.weight) + (0.083 * this.age) + 2.25;
    this.V    = (0.867 * this.weight) + (1.885 * this.age) + 15.88;
  }
}
