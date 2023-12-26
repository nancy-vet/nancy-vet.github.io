import { Component, OnInit } from "@angular/core";

@Component({
  selector    : 'modal--result',
  templateUrl : './result-modal.component.html',
  styleUrl    : './result-modal.component.scss',
})
export class ResultModal implements OnInit {

  public selectedObject: any;

  public $uiPropery = {
    administrationValue             : '',
    description                     : '',

    alternativeAdministrationValue  : '',
    alternativeDescription          : ''
  };

  public ngOnInit() {

    this.selectedObject.v1 = (
        parseFloat(this.selectedObject.c2) /  parseFloat(this.selectedObject.c1)
      ) * parseFloat(this.selectedObject.v2);

      console.log(this.selectedObject);

    if(this.selectedObject.patientType   == 'dog') {

      if(this.selectedObject.c2 == '5') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 22}`;
        this.$uiPropery.description             = 'Поставя се ИВ q4h за 24 ч - след това - q6h за още 24h';
        this.$uiPropery.alternativeAdministrationValue = `${parseFloat(this.selectedObject.patientWeight) * 5.5}`;
        this.$uiPropery.alternativeDescription  = 'Постоянна инфузия';
      }

      if(this.selectedObject.c2 == '20') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 5.5}`;
        this.$uiPropery.description             = 'Бавно венозно q4h / 5 вливания - след това - q6h 4 вливания ';
      }
    }

    if(this.selectedObject.patientType == 'cat') {

      if(this.selectedObject.c2 == '5') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 5}`;
        this.$uiPropery.description             = 'Постоянна инфузия';
      }

      if(this.selectedObject.c2 == '20') {
        this.$uiPropery.administrationValue     = `5ml на котка`;
        this.$uiPropery.description             = 'Бавно венозно 5 вливания през 6 часа - след това - 4 вливания през 8 часа ';
      }
    }

  }
}
