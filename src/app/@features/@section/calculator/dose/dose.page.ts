import { Component, inject  } from '@angular/core';
import { MenuController     } from '@ionic/angular';
import { PatientModel       } from 'nv@models/patient.model';
import { DataService        } from 'nv@services/data.service';

@Component({
  selector    : 'page-calculator-dose',
  templateUrl : 'dose.page.html',
  styleUrl    : 'dose.page.scss'
})
export class DosePage {

  private ttt: MenuController       = inject(MenuController);
  private dataService: DataService  = inject(DataService);

  public inputSuggestionCollection  = [];
  public cardCollection: any[]      = [];

  public $componentState = {
    isPatientCreated: false
  };

  public $uiProperty = {
    title: 'Добави пациент'
  }

  public $formProperty: PatientModel = {
    patientName   : '',
    patientWeight : 0,
    patientType   : '',
    activeMedicine: ''
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public onInput($event: any): void {

    const value     = $event?.detail.value;
    this.inputSuggestionCollection = this.dataService.getById(value);
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public processSelectPatientType($patientType: any): void {
    this.$formProperty.patientType = $patientType;
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public processAddPatient($event: any): void {
    this.$componentState.isPatientCreated = true;
  }

  /**
   * @author Mihail Petrov
   * @returns boolean
   */
  public isMedicinePickerVisible(): boolean {
    return this.$componentState.isPatientCreated == true;
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public processSelectedCard($event: any) {

    this.inputSuggestionCollection    = [];
    this.$formProperty.activeMedicine = '';
    this.cardCollection.push($event);
  }

  public processOpenMenu() {

    this.ttt.close('first-menu')
    this.ttt.open('first-menu')
  }
}
