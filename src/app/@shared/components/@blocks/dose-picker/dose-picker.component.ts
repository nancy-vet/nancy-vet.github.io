import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, ViewChild, ViewChildren } from "@angular/core";

@Component({
  selector    : 'dose-picker',
  templateUrl : './dose-picker.component.html',
  styleUrls   : ['./dose-picker.component.scss'],
  standalone  : true,
  imports     : [
    CommonModule
  ]
})
export class DosePicker {

  @Input()
  public inputData: any;

  @Output()
  public onSelect = new EventEmitter();

  @ViewChildren("element")
  public elementCollection: any;

  public processValue(value: any, $event: any) {

    this.elementCollection._results.map((element: any) => {
      element.nativeElement.classList.remove('is-selected');
    });

    $event.target.classList.add('is-selected');
    this.onSelect.emit(value);
  }

}
