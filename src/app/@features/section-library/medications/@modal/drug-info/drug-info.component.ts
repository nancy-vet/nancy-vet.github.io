import { Component, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrls   : ['./drug-info.component.scss']
})
export class DrugInfoModal {

  private modalController: ModalController  = inject(ModalController);

  public selectedDrug: any;
  public selectedDrugApplicationCollection: any[] = [];

  public ngOnInit() {
    this.selectedDrugApplicationCollection = this.processApplicationCollection();
  }

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   * @param url
   */
  public onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private processApplicationCollection() {

    const application       = this.selectedDrug.application;
    const resultCollection  = [];

    if(application['any']) {

      return [
        { typeTitle: 'за КУЧЕТА'  , ...application['any'] },
        { typeTitle: 'за КОТКИ'   , ...application['any'] }
      ];
    }

    if(application['dog']) {
      resultCollection.push({ typeTitle: 'за КУЧЕТА'  , ...application['dog'] });
    }

    if(application['cat']) {
      resultCollection.push({ typeTitle: 'за КОТКИ'   , ...application['cat'] });
    }

    return resultCollection;
  }
}
