import { Component, OnInit, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ResultModal        } from './@modal/result-modal/result-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'page-ceftriaxone-dilution',
  templateUrl : 'ceftriaxone-dilution.page.html',
  styleUrl    : 'ceftriaxone-dilution.page.scss'
})
export class CeftriaxoneDilution {

  private dialogService: DialogService  = inject(DialogService);
  private $router: ActivatedRoute       = inject(ActivatedRoute);

  public $ui = {
    isLiqidDoseProcessable  : true,
    concentrationResult     : 0,
    animalDose              : 0,
    mlNeeded                : 0
  };


  public $formProperty: any = {
    patientWeight             : 0,
    dosage                    : 0,
    injectionRoute            : 'IV',
    ceftriaxoneConcentration  : '1'
  }


  public processSelectInjectionRoute($injectionRoute: any): void {
    this.$formProperty.injectionRoute = $injectionRoute;
  }

  public processCalculationFirstPainInfusion() {

    // this.$ui.formulaResult = ((
    //   parseFloat(this.$formProperty.patientWeight) * (this.$formProperty.dose)
    // ) / this.$formProperty.speed) * 50

    // this.dialogService.open(ResultModal, {
    //   selectedObject: this.$formProperty
    // });
  }

  public processCalculationCeftriaxoneConcentration() {

    this.$ui.concentrationResult = parseFloat(this.$formProperty.ceftriaxoneConcentration) / 5 * 1000

    this.$ui.animalDose = parseFloat(this.$formProperty.dosage) * parseFloat(this.$formProperty.patientWeight)

    this.$ui.mlNeeded = (this.$ui.animalDose / (this.$ui.concentrationResult))
  }

  public isProcessable() {

    return  this.$formProperty.c2 != null &&
            this.$formProperty.c1 != null &&
            this.$formProperty.v2 != null &&
            this.$formProperty.patientWeight != null;
  }

  public selectInjectionRoute($event: any) {
    this.$formProperty.injectionRoute = ($event.detail.checked) ? 'IM' : 'IV';
  }

  public selectCeftriaxoneConcentration($event: any) {
    this.$formProperty.ceftriaxoneConcentration = ($event.detail.checked) ? '2' : '1';
  }

  public clearAllValues() {

    this.$formProperty = {
      patientWeight : 0,
      dosage        : 0,
      ceftriaxoneConcentration: '1'
    }
  }
}
