import { Component, OnInit, inject  } from "@angular/core";
import { ModalController            } from "@ionic/angular";

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrl    : './drug-info.component.scss'
})
export class DrugInfoModal {

  private modalController: ModalController  = inject(ModalController);

  public selectedObject: any;
  public selectedObjectApplicationCollection: any[] = [];

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

  public renderVideo(tag: string) {
    return tag.replace("$", "");
  }

  public renderImage(tag: string) {
    return tag.replace("@", "");
  }
}
