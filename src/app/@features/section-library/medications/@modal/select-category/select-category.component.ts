import { Component, ViewChild, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";
import { DataService        } from "nv@services/data.service";

@Component({
  selector    : 'modal--select-category2',
  templateUrl : './select-category.component.html',
  styleUrls   : ['./select-category.component.scss']
})
export class SelectCategoryModal {

  private $dataService: DataService         = inject(DataService);
  private modalController: ModalController  = inject(ModalController);

  @ViewChild("categoryPicker") selectCategoryComponent: any;

  private $selectedCategories: any  = [];
  private _searchCriteria: string   = 'title';

  /**
   * @author Mihail Petrov
   */
  public onCancel() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {

    this.modalController.dismiss({
      selectedCategory  : this.$selectedCategories,
      searchCriteria    : this._searchCriteria
    }, 'confirm');
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public processOnSelect($event: any) {
    this._searchCriteria = $event.value;
  }

  /**
   * @author Mihail Petrov
   * @param $categoryCollection
   */
  public processOnCategorySelect($categoryCollection: any) {
    this.$selectedCategories = $categoryCollection;
  }

  public onReset() {

    this.selectCategoryComponent.resetAllCategories();
    this._searchCriteria      = 'title';
  }
}
