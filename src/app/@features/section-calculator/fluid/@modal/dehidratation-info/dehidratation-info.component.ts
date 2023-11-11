import { Component, inject } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";

@Component({
  selector    : 'modal--dehidratation-info',
  templateUrl : './dehidratation-info.component.html',
  styleUrls   : ['./dehidratation-info.component.scss'],
  standalone  : true,
  imports     : [
    IonicModule
  ]
})
export class DehidratationModal {

  private modalController: ModalController  = inject(ModalController);

  public onConfirm() {
    this.modalController.dismiss();
  }
}
