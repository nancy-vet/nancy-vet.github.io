import { Component, inject  } from '@angular/core';
import { MenuController     } from '@ionic/angular';
// import { PatientModel       } from 'nv@models/patient.model';
import { DataService        } from 'nv@services/data.service';
// import {DrugCollectionJson  } from "nv@json/medication.collection.json";

@Component({
  selector    : 'page-calculator-dose',
  templateUrl : 'dose.page.html',
  styleUrl    : 'dose.page.scss'
})
export class DosePage {

  // searchDrugValue: string = ''; // Chat GPT
   public dropdownContent: string = ''; // Chat GPT
   public drugCollectionResult: any[] = [];

  // private $drugCollection: any = [];

  // public $medicine() {

  //   this.$drugCollection = structuredClone(DrugCollectionJson);
  //   return this;
  // }

  private ttt: MenuController       = inject(MenuController);
  public dataService: DataService  = inject(DataService);

  public inputSuggestionCollection: any[]  = [];
  public cardCollection: any[]      = [];

  private selectedDrug: any = null;

  public $componentState = {
    isPatientCreated: false
  };

  public $uiProperty = {
    title: 'Добави пациент'
  }

  public $formProperty: any = {
    searchDrug          : '',
    patientName         : '',
    patientWeight       : 0,
    patientWeightNumber : 0,
    patientWeightUnit   : 'kilogram',
    patientType         : '',
    activeMedicine      : ''
  }

  // Избери вид животно: any/ cat/ dog
  public processSelectPatientType ($patientType: any): void {
    this.$formProperty.patientType = $patientType;
  }

  // ТЕГЛО - пресмятане
  public takePatientWeightUnit(): void {

    // console.log(this.$formProperty.patientWeightUnit);
    this.$formProperty.patientWeightNumber = this.$formProperty.patientWeight;

    if (this.$formProperty.patientWeightUnit == "kilogram") {
      // console.log(this.$formProperty.patientWeightNumber)
    }
    else{
        this.$formProperty.patientWeightNumber /= 1000;
        // console.log(this.$formProperty.patientWeightNumber)
    }
  }


  public processDrugSelection(drug: any) {
    this.selectedDrug = drug;

    //
  }

  //Бутон ИЗЧИСЛИ
  public processCalculationDosage() {

    const weight            = this.$formProperty.patientWeight;
    const drugConcentration = this.selectedDrug.drugConcentration;

    // this.selectedDrug.drugConcentration

    console.log(this.selectedDrug.drugConcentration)

    // this.takePatientWeightUnit();
    // console.log(this.$formProperty.patientWeight)
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public onInput($event: any): void {

    const value     = $event?.detail.value;
    this.inputSuggestionCollection = this.dataService.getById(value, true);
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
