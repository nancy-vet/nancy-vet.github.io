import { Component, EventEmitter, Input, Output, ViewChildren, inject } from "@angular/core";
import { IonicModule  } from "@ionic/angular";
import { UtilityDom   } from "../../../services/utility.service";

@Component({
  selector    : 'nv-radio',
  templateUrl : './nv-radio.component.html',
  styleUrls   : ['./nv-radio.component.scss'],
  standalone  : true,
  imports     : [ IonicModule ]
})
export class NvRadioComponent {

  @Input() public inputValue: any;

  @Output() public onSelect         = new EventEmitter();
  @Output() public inputValueChange = new EventEmitter();

  @ViewChildren("nvRadioElement")
  public nvRadioElementCollection: any;

  // @
  private utilityService: UtilityDom = inject(UtilityDom);

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public processOnSelect($event: any, $filterValue: string) {

    this.utilityService.toggleClass(this.nvRadioElementCollection, $event);

    this.onSelect.emit({
      value: $filterValue
    });
  }
}
