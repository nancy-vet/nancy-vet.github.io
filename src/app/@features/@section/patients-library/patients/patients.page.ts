import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from './@modal/select-category/select-category.component';
import { PatientInfoModal          } from './@modal/patient-info/patient-info.component';


@Component({
  selector    : 'page-collection',
  templateUrl : './patients.page.html',
  styleUrl    : './patients.page.scss'
})
export class PatientsPage implements OnInit {

  private $patientDataService: PatientDataService     = inject(PatientDataService);
  private dialogService: DialogService                = inject(DialogService);

  public $collection: any = [];

  public ngOnInit(): void {
    this.$collection = this.$patientDataService.$patient().getAll();
    // console.log("Loaded patients:", this.$collection);
  }


  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(PatientInfoModal, {
      selectedObject: $event
    }));
  }


  // private processGetItemCollection() {

  //   this.$collection = this.$patientdataService.$patient()
  //                     // .filterByCategory(this.$selectedCategories)
  //                     .getAll();
  // }

}
