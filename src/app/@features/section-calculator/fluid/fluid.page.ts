import { Component, inject    } from '@angular/core';

import { DialogService        } from 'nv@services/dialog.service';
import { DehidratationModal   } from './@modal/dehidratation-info/dehidratation-info.component';
import { FluidResultModal     } from './@modal/result-modal/fluid-result-modal.component';

@Component({
  selector    : 'page-calculator',
  templateUrl : 'fluid.page.html',
  styleUrl    : 'fluid.page.scss'
})
export class FluidPage {

  private dialogService: DialogService  = inject(DialogService);

  public inputSuggestionCollection  = [];
  public cardCollection: any[]      = [];

  public $formProperty: any = {
    patientWeight         : null,
    consumeFood           : true,
    liquidIntakePerHauer  : null,
    urineValue            : 0,
    vomitValue            : 0,
    diariaValue           : 0,
    dehidratationValue    : 0
  };

  public $uiProperty = {
    daylyDose   : 0,
    hoyerlyDose : '0',
    isVisbible  : false
  }

  public liquidValueCollection = [
    { key: '0'  , value: 0    },
    { key: '50' , value: 50   },
    { key: '100', value: 100  },
    { key: '150', value: 150  },
    { key: '200', value: 200  },
  ];

  public dehidratationValueCollection = [
    { key: '0'  , value: 0      },
    { key: '5'   , value: 0.05   },
    { key: '7'   , value: 0.07   },
    { key: '10'  , value: 0.1    },
    { key: '12'  , value: 0.12   },
  ]

  public onSelectUrineValue(value: any) {
    this.$formProperty.urineValue = value;
  }

  public onSelectVomitValue(value: any) {
    this.$formProperty.vomitValue = value;
  }

  public onSelectDiariaValue(value: any) {
    this.$formProperty.diariaValue = value;
  }

  public onSelectDehidratationValue(value: any) {
    this.$formProperty.dehidratationValue = value;
  }

  /**
   * @author Mihail Petrov
   */
  public processFluidCalculation() {

    this.dialogService.open(FluidResultModal, {
      selectedObject: this.$formProperty
    });
  }

  /**
   *
   */
  public clearAllValues() {

    this.$uiProperty.isVisbible              = false;
    this.$formProperty.patientWeight         = null,
    this.$formProperty.consumeFood           = true;
    this.$formProperty.liquidIntakePerHauer  = null;
    this.$formProperty.urineValue            = 0;
    this.$formProperty.vomitValue            = 0;
    this.$formProperty.diariaValue           = 0;
    this.$formProperty.dehidratationValue    = 0;
  }

  /**
   *
   */
  public openInfoModal() {
      this.dialogService.open(DehidratationModal);
  }
}
