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
   dropdownContent: string = ''; // Chat GPT

  // private $drugCollection: any = [];

  // public $medicine() {

  //   this.$drugCollection = structuredClone(DrugCollectionJson);
  //   return this;
  // }

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

  public $formProperty: any = {
    searchDrug    : '',
    patientName   : '',
    patientWeight : 0,
    patientWeightNumber : 0,
    patientWeightUnit : 'kilogram',
    patientType   : '',
    activeMedicine: ''
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


  //Създаване на списък с ЛЕКАРСТВА

  // public populateDropdown(result) {

    //const searchDrugValue  = searchDrugInput?.value?.toLowerCase();
    // const searchDrugValue  = searchDrugInput.value.id;

    // if(searchDrugValue.length < 2) {
    //     return drugDropdown.innerHTML = "";
    // }

    // const findDrugCollection = drugCollection.filter((element) => {
    //   return element.title.toLowerCase().includes(searchDrugValue);
    // })

    // const collection = [];
    // for (const menuItem of findDrugCollection) {
    //     const index = drugCollection.findIndex((element) => element.title.toLowerCase() === menuItem.title.toLowerCase());
    //     if (index !== -1) {
    //         collection.push(`<div onclick="processOpenDrug(${index})">${menuItem.title}</div>`);
    //     }
    // }

    // drugDropdown.innerHTML = collection.join('');
  // }



  //Бутон ИЗЧИСЛИ
  public processCalculationDosage() {
    this.takePatientWeightUnit();
    console.log(this.$formProperty.patientWeight)


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
