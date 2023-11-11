import { Component, inject    } from '@angular/core';
import { DialogService        } from 'nv@services/dialog.service';
import { ResultModal          } from './@modal/result-modal/result-modal.component';


@Component({
  selector    : 'page-analisys',
  templateUrl : 'analisys.page.html',
  styleUrl    : 'analisys.page.scss'
})
export class AnalisysPage {

  private dialogService: DialogService  = inject(DialogService);

  public $formProperty: any = {
    animalType  : null,
    bloodOrigin : null,
    PH          : null,
    PCO2        : null,
    PO2         : null,
    HCO3        : null,
    BE          : null,
    Na          : null,
    K           : null,
    Cl          : null
  };

  /**
   * @author Mihail Petrov
   */
  public clearAllValues() {

    this.$formProperty = {
      animalType  : null,
      bloodOrigin : null,
      PH          : null,
      PCO2        : null,
      PO2         : null,
      HCO3        : null,
      BE          : null,
      Na          : null,
      K           : null,
      Cl          : null
    };
  }

  /**
   * @author Mihail Petrov
   */
  public openInfoModal() {

    this.dialogService.open(ResultModal, {
      $modalParameters: this.$formProperty
    });
  }
}
