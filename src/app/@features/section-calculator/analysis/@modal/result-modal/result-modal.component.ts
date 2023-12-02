import { Component, OnInit, inject    } from "@angular/core";
import { ModalController              } from "@ionic/angular";
import { AnalysisService              } from "../../analysis.service";

@Component({
  selector    : 'modal--result',
  templateUrl : './result-modal.component.html',
  styleUrl    : './result-modal.component.scss',
})
export class ResultModal implements OnInit {

  private analysysService: AnalysisService  = inject(AnalysisService);
  private modalController: ModalController  = inject(ModalController);
  private selectedObject: any;

  public $uiProperty = {
    PH    : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    PCO2  : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    PO2   : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    HCO3  : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    BE    : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } },
    AG    : { value: 0, levelIndex: 0, level: {icon: '', color: '' }, reference: {lowerBownd: null, upperBownd: null } }
  };

  public ngOnInit() {

    this.$uiProperty.PH.value      = this.selectedObject.PH;
    this.$uiProperty.PH.reference  = this.analysysService.getReferencePH(this.selectedObject);
    this.$uiProperty.PH.levelIndex = this.analysysService.calculatePH(this.selectedObject);
    this.$uiProperty.PH.level      = this.analysysService.getLevel(
      this.analysysService.calculatePH(this.selectedObject)
    );

    this.$uiProperty.PCO2.value     = this.selectedObject.PCO2;
    this.$uiProperty.PCO2.reference = this.analysysService.getReferencePCO2(this.selectedObject);
    this.$uiProperty.PH.levelIndex  = this.analysysService.calculatePCO2(this.selectedObject)
    this.$uiProperty.PCO2.level     = this.analysysService.getLevel(
      this.analysysService.calculatePCO2(this.selectedObject)
    );

    this.$uiProperty.PO2.value      = this.selectedObject.PO2;
    this.$uiProperty.PO2.reference  = this.analysysService.getReferencePO2(this.selectedObject);
    this.$uiProperty.PO2.level      = this.analysysService.getLevel(
      this.analysysService.calculatePO2(this.selectedObject)
    );

    this.$uiProperty.HCO3.value      = this.selectedObject.HCO3;
    this.$uiProperty.HCO3.reference  = this.analysysService.getReferenceHCO3(this.selectedObject);
    this.$uiProperty.HCO3.level      = this.analysysService.getLevel(
      this.analysysService.calculateHCO3(this.selectedObject)
    );

    this.$uiProperty.BE.value      = this.selectedObject.BE;
    this.$uiProperty.BE.reference  = this.analysysService.getReferenceBE(this.selectedObject);
    this.$uiProperty.BE.level      = this.analysysService.getLevel(
      this.analysysService.calculateBE(this.selectedObject)
    );

    this.$uiProperty.AG.value = this.analysysService.calculateAnionGap(this.selectedObject);
    this.$uiProperty.AG.level = this.analysysService.getLevel(
      this.analysysService.getAgLevel(this.selectedObject)
    );
  }
}
