import { Component, inject  } from '@angular/core';
import { MenuController     } from '@ionic/angular';
import { DrugInfoModal } from 'nv@features/@section/methods/@modal/drug-info/drug-info.component';
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

    const weight                        = this.$formProperty.patientWeight;
    const drugConcentration             = this.selectedDrug.drugConcentration;
    const drugConcentrationDecorator    = this.selectedDrug.drugConcentrationDecorator;
    const patientType                   = this.$formProperty.patientType;

    // this.selectedDrug.drugConcentration

    console.log(this.selectedDrug.drugConcentration)
    console.log(`drug_concentration: ${drugConcentration} ${drugConcentrationDecorator}`)
    // this.takePatientWeightUnit();
    // console.log(this.$formProperty.patientWeight)

    let activeSubstance = this.selectedDrug.activeSubstance;
    let activeSubstanceDose
    let activeSubstanceDoseDecorator
    let applicationMethod

    if (patientType == "cat" ) {
      if (this.selectedDrug.application.cat) {
          activeSubstanceDose           = this.selectedDrug.application.cat.activeSubstanceDose;
          activeSubstanceDoseDecorator  = this.selectedDrug.application.cat.activeSubstanceDoseDecorator;
          applicationMethod             = this.selectedDrug.application.cat.applicationMethod;
      } else {
          activeSubstanceDose           = this.selectedDrug.application.any.activeSubstanceDose;
          activeSubstanceDoseDecorator  = this.selectedDrug.application.any.activeSubstanceDoseDecorator;
          applicationMethod             = this.selectedDrug.application.any.applicationMethod;
      }
  } else if (patientType == "dog") {
      if (this.selectedDrug.application.dog) {
          activeSubstanceDose           = this.selectedDrug.application.dog.activeSubstanceDose;
          activeSubstanceDoseDecorator  = this.selectedDrug.application.dog.activeSubstanceDoseDecorator;
          applicationMethod             = this.selectedDrug.application.dog.applicationMethod;
      } else {
          activeSubstanceDose           = this.selectedDrug.application.any.activeSubstanceDose;
          activeSubstanceDoseDecorator  = this.selectedDrug.application.any.activeSubstanceDoseDecorator;
          applicationMethod             = this.selectedDrug.application.any.applicationMethod;
      }
  } else if (patientType == "both") {
      activeSubstanceDose               = this.selectedDrug.application.any.activeSubstanceDose;
      activeSubstanceDoseDecorator      = this.selectedDrug.application.any.activeSubstanceDoseDecorator;
      applicationMethod                 = this.selectedDrug.application.any.applicationMethod;
  // } else {
  //     alert("Избери вид домашен любимец!");
  }


  console.log(`active_substance: ${activeSubstance} ${activeSubstanceDose} ${activeSubstanceDoseDecorator} ${applicationMethod}`);

        //CALCULATING Active substance needed:
        const active_substance_needed = [];
        let active_substance_needed_string = '';
        let as_lowest_dose;
        let as_highest_dose;
        let as_dose;



      //   if (activeSubstanceDose.length === 2) {
      //     drugInfo =`
      //     <div class="div-drug-calculated">
      //         <div class="fw800">${this.selectedDrug.title}</div>
      //         <div>
      //             <span id="div-active-substance">${activeSubstance}</span>
      //             <span>,</span>
      //             <span id="div-active-substance-dose">${activeSubstanceDose[0]} - ${activeSubstanceDose[1]} ${activeSubstanceDoseDecorator}</span>
      //         </div>
      //         <div id="div-drug-appl">
      //             <div>Как се поставя:</div>
      //             <div id="div-drug-application">${applicationMethod}</div>
      //         </div>
      //     </div>
      //     `;

      // } else if (activeSubstanceDose.length === 1) {
      //     drugInfo =`
      //     <div class="div-drug-calculated">
      //         <div class="fw800">${this.selectedDrug.title}</div>
      //         <div>
      //             <span id="div-active-substance">${activeSubstance}</span>
      //             <span>,</span>
      //             <span id="div-active-substance-dose">${activeSubstanceDose} ${activeSubstanceDoseDecorator}</span>
      //         </div>
      //         <div id="div-drug-appl">
      //             <div>Как се поставя:</div>
      //             <div id="div-drug-application">${applicationMethod}</div>
      //         </div>
      //     </div>
      //     `;
      // }


      if (activeSubstanceDoseDecorator == "g") {
        activeSubstanceDoseDecorator *= 1000;
    }

    else if (activeSubstanceDoseDecorator == "µg_kg") {
        activeSubstanceDoseDecorator /= 1000;
    }








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
