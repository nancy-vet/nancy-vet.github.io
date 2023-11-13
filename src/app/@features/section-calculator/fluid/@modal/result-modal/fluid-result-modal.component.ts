import { Component, OnInit, inject    } from "@angular/core";
import { FluidService                 } from "../../fluid.service";

@Component({
  selector    : 'modal--fluid-result',
  templateUrl : './fluid-result-modal.component.html',
  styleUrl    : './fluid-result-modal.component.scss',
})
export class FluidResultModal implements OnInit {

  private fluidService: FluidService  = inject(FluidService);
  private $modalParameters: any;

  public $uiProperty = {
    daylyDose   : 0,
    hoyerlyDose : ''
  }

  public ngOnInit() {

    this.$uiProperty.daylyDose    = this.fluidService.calculateDaylyDose(this.$modalParameters);
    this.$uiProperty.hoyerlyDose  = this.fluidService.calculateHoyerlyDose(this.$modalParameters);
  }
}
