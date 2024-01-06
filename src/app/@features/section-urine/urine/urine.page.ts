import { Component, OnInit, inject  } from '@angular/core';
import { DialogService } from 'nv@services/dialog.service';

import { DetailModal } from './@modal/detail/detail.component';
import { UrineService } from 'nv@services/urine.service';

@Component({
  selector    : 'page-urine',
  templateUrl : './urine.page.html',
  styleUrl    : './urine.page.scss'
})
export class UrinePage implements OnInit {

  private $urineService: UrineService   = inject(UrineService);
  private dialogService: DialogService  = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    const service        = this.getServiceBasedOnPath(serviceId);

    this.$data = this.$urineService.get(service);
  }

  /**
   * @author Mihail Petrov
   * @param element
   */
  public async onSelectCard(element: any) {

    (await this.dialogService.open(DetailModal, {
      selectedObject: element
    }))
  }

  /**
   * @author Mihail Petrov
   * @param pathId
   * @returns
   */
  private getServiceBasedOnPath(pathId: string) {

    if(pathId == 'tab1') return 'sediment';
    if(pathId == 'tab2') return 'urine-parameters';
    return '';
  }
}
