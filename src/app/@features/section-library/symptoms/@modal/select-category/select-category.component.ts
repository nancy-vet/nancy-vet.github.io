import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";
import { DataService        } from "nv@services/data.service";

@Component({
  selector    : 'modal--select-category',
  templateUrl : './select-category.component.html',
  styleUrl    : './select-category.component.scss'
})
export class SelectCategoryModal {

  private $dataService: DataService         = inject(DataService);
  private modalController: ModalController  = inject(ModalController);

  public imageCollection: any       = structuredClone(this.$dataService.getAllCategories());
  private $selectedCategories: any  = [];

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
      selectedCategory: this.$selectedCategories
    }, 'confirm');
  }


  /**
   * @author Mihail Petrov
   * @param $categoryCollection
   */
  public processOnCategorySelect($categoryCollection: any) {
    this.$selectedCategories = $categoryCollection;
  }

  public onReset() {
    // empty
  }
}
