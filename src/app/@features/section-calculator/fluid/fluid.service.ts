import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FluidService {

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculateDaylyDose($formProperty: any) {

        return  this.calculateMaintanence($formProperty)   +
                this.calculateDehidratation($formProperty) +
                this.calculateOngoingLosses($formProperty) -
                this.calculateLiquidIntakePerHauer($formProperty);
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculateHoyerlyDose($formProperty: any) {
    return (this.calculateDaylyDose($formProperty) / 24).toFixed(3);
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateMaintanence($formProperty: any) {
    return (30 * $formProperty.patientWeight) + 70;
  }


  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateOngoingLosses($formProperty: any) {

    const sensible  =   $formProperty.urineValue +
                        $formProperty.vomitValue +
                        $formProperty.diariaValue;

    const insensible =  $formProperty.patientWeight * 20;

    return sensible + insensible;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateDehidratation($formProperty: any) {
    return $formProperty.dehidratationValue * $formProperty.patientWeight * 1000;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateLiquidIntakePerHauer($formProperty: any) {
    return $formProperty.liquidIntakePerHauer * 6;
  }
}
