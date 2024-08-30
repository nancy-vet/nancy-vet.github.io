import { Component, ViewChild, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";

@Component({
  selector    : 'modal--select-category2',
  templateUrl : './select-category.component.html',
  styleUrl    : './select-category.component.scss'
})
export class SelectCategoryModal {

  private modalController: ModalController  = inject(ModalController);

  @ViewChild("categoryPicker") selectCategoryComponent: any;

  private $selectedCategories: any  = [];
  private _searchCriteria: string   = 'title';
  private selectedAnimalType: any = null;

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
      selectedCategory    : this.$selectedCategories,
      selectedAnimalType  : this.selectedAnimalType
    }, 'confirm');
  }

  /**
   * @author Mihail Petrov
   * @param $categoryCollection
   */
  public processOnAnimalTypeSelect($animalType: any) {
    this.selectedAnimalType = $animalType;
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
