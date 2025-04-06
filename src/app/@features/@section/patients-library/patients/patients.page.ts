import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from './@modal/select-category/select-category.component';
import { PatientBarModal          } from './@modal/patient-bar/patient-bar.component';


@Component({
  selector    : 'page-collection',
  templateUrl : './patients.page.html',
  styleUrl    : './patients.page.scss'
})
export class PatientsPage implements OnInit {

  private $dataService: PatientDataService  = inject(PatientDataService);
  private dialogService: DialogService      = inject(DialogService);

  public $collection: any = [];

  public ngOnInit(): void {
    this.$collection = this.$dataService.$patient().getAll();
    // console.log("Loaded patients:", this.$collection);
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(PatientBarModal, {
      selectedObject: $event
    }));
  }


  // private processGetItemCollection() {

  //   this.$collection = this.$dataService.$patient()
  //                     // .filterByCategory(this.$selectedCategories)
  //                     .getAll();
  // }

  public onItemSearched($event: any) {

    this.$collection = this.$dataService.$patient().filterByOwnerName($event).getAll();
                      //.filterByCategory(this.$selectedCategories)
                      //.filterByTitle(filterValue)
                      // .filterByPrimary(this.activeFilter, filterValue)
                      //.get();
  }


  public onFilter($event: any) {
    console.log($event)
  }
}
