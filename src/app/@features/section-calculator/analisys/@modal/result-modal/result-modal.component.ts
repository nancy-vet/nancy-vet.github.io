import { Component, inject            } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule, ModalController } from "@ionic/angular";
import { AnalisysService              } from "../../analysys.service";

@Component({
  selector    : 'modal--result',
  templateUrl : './result-modal.component.html',
  styleUrls   : ['./result-modal.component.scss'],
  standalone  : true,
  imports     : [
    IonicModule,
    CommonModule
  ]
})
export class ResultModal {

  private analysysService: AnalisysService  = inject(AnalisysService);
  private modalController: ModalController  = inject(ModalController);
  private $modalParameters: any;

  public $uiProperty = {
    PH    : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    PCO2  : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    PO2   : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    HCO3  : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    BE    : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    AG    : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } }
  };

  public ngOnInit() {

    this.$uiProperty.PH.value      = this.$modalParameters.PH;
    this.$uiProperty.PH.reference  = this.analysysService.getReferencePH(this.$modalParameters);
    this.$uiProperty.PH.levelIndex = this.analysysService.calculatePH(this.$modalParameters);
    this.$uiProperty.PH.level      = this.analysysService.getLevel(
      this.analysysService.calculatePH(this.$modalParameters)
    );

    this.$uiProperty.PCO2.value     = this.$modalParameters.PCO2;
    this.$uiProperty.PCO2.reference = this.analysysService.getReferencePCO2(this.$modalParameters);
    this.$uiProperty.PH.levelIndex  = this.analysysService.calculatePCO2(this.$modalParameters)
    this.$uiProperty.PCO2.level     = this.analysysService.getLevel(
      this.analysysService.calculatePCO2(this.$modalParameters)
    );

    this.$uiProperty.PO2.value      = this.$modalParameters.PO2;
    this.$uiProperty.PO2.reference  = this.analysysService.getReferencePO2(this.$modalParameters);
    this.$uiProperty.PO2.level      = this.analysysService.getLevel(
      this.analysysService.calculatePO2(this.$modalParameters)
    );

    this.$uiProperty.HCO3.value      = this.$modalParameters.HCO3;
    this.$uiProperty.HCO3.reference  = this.analysysService.getReferenceHCO3(this.$modalParameters);
    this.$uiProperty.HCO3.level      = this.analysysService.getLevel(
      this.analysysService.calculateHCO3(this.$modalParameters)
    );

    this.$uiProperty.BE.value      = this.$modalParameters.BE;
    this.$uiProperty.BE.reference  = this.analysysService.getReferenceBE(this.$modalParameters);
    this.$uiProperty.BE.level      = this.analysysService.getLevel(
      this.analysysService.calculateBE(this.$modalParameters)
    );

    this.$uiProperty.AG.value = this.analysysService.calculateAnionGap(this.$modalParameters);
    this.$uiProperty.AG.level = this.analysysService.getLevel(
      this.analysysService.getAgLevel(this.$modalParameters)
    );
  }

  public onConfirm() {
    this.modalController.dismiss();
  }
}
