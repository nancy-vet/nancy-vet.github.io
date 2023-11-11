import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DataService } from 'nv@services/data.service';

@Component({
  selector    : 'category-picker',
  templateUrl : './category-picker.component.html',
  styleUrls   : ['./category-picker.component.scss'],
  standalone  : true,
  imports     : [
    IonicModule,
    CommonModule
  ]
})
export class CategoryPickerComponent {

  @Input()
  public inputPreset: any = 'default';

  @Output()
  public onSelect = new EventEmitter();

  private $dataService: DataService = inject(DataService);

  public imageCollection: any;
  private $selectedCategories: any  = [];

  public ngOnInit() {
    this.imageCollection = this.$dataService.getAllCategories(this.inputPreset);
  }

  /**
   * @author Mihail Petrov
   * @param category
   */
  public selectCategory(category: any) {

    category.isSelected = !category.isSelected;

    this.imageCollection.forEach((element: any) => {
      if(element.isSelected) this.$selectedCategories.push(element);
    });

    this.onSelect.emit(this.$selectedCategories);
  }


  /**
   * @author Mihail Petrov
   */
  public resetAllCategories() {

    this.$selectedCategories = [];

    this.imageCollection.map((element: any) => {
      element.isSelected = false;
    });
  }
}
