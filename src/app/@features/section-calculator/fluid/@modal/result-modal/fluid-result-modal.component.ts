import { Component, inject            } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";
import { CommonModule                 } from "@angular/common";
import { FluidService                 } from "../../fluid.service";

@Component({
  selector    : 'modal--fluid-result',
  templateUrl : './fluid-result-modal.component.html',
  styleUrls   : ['./fluid-result-modal.component.scss'],
  standalone  : true,
  imports     : [
    IonicModule,
    CommonModule
  ]
})
export class FluidResultModal {

  private fluidService: FluidService        = inject(FluidService);
  private modalController: ModalController  = inject(ModalController);
  private $modalParameters: any;

  public $uiProperty = {
    daylyDose   : 0,
    hoyerlyDose : ''
  }

  public ngOnInit() {
    this.$uiProperty.daylyDose = this.fluidService.calculateDaylyDose(this.$modalParameters);
    this.$uiProperty.hoyerlyDose = this.fluidService.calculateHoyerlyDose(this.$modalParameters);
  }

  public onConfirm() {
    this.modalController.dismiss();
  }
}
