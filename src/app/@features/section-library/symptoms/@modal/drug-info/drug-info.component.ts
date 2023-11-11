import { Component, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrls   : ['./drug-info.component.scss']
})
export class DrugInfoModal {

  public selectedDrug: any;
  public selectedDrugApplicationCollection: any[] = [];


  /**
   * @author Mihail Petrov
   * @param url
   */
  public onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }
}
