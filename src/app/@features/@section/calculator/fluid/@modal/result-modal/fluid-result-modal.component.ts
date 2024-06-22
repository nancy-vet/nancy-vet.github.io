import { Component, OnInit, inject    } from "@angular/core";
import { FluidService                 } from "../../fluid.service";

@Component({
  selector    : 'modal--fluid-result',
  templateUrl : './fluid-result-modal.component.html',
  styleUrl    : './fluid-result-modal.component.scss',
})
export class FluidResultModal implements OnInit {

  private fluidService: FluidService  = inject(FluidService);
  private selectedObject: any;

  public $uiProperty = {
    dailyDose   : 0,
    hourlyDose : ''
  }

  public ngOnInit() {

    this.$uiProperty.dailyDose    = this.fluidService.calculateDailyDose(this.selectedObject);
    this.$uiProperty.hourlyDose  = this.fluidService.calculateHourlyDose(this.selectedObject);
  }
}
