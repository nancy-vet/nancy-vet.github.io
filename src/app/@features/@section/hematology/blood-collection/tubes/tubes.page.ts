import { Component, OnInit, inject  } from '@angular/core';
import { DetailModal                } from './@modal/detail/detail.component';
import { DialogService              } from 'nv@services/dialog.service';
import { BloodCollectionService     } from 'nv@services/blood-collection.service';

@Component({
  selector    : 'page-blood-collection',
  templateUrl : './tubes.page.html',
})
export class BloodCollectionPage implements OnInit {

  private $BloodCollectionService: BloodCollectionService = inject(BloodCollectionService);
  private dialogService: DialogService                    = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    const service        = this.getServiceBasedOnPath(serviceId);

    this.$data = this.$BloodCollectionService.get('tubes');
  }

  /**
   * @author Mihail Petrov
   * @param element
   */
  // public async onSelectCard(element: any) {

  //   (await this.dialogService.open(DetailModal, {
  //     selectedObject: element
  //   }))
  // }

  /**
   * @author Mihail Petrov
   * @param pathId
   * @returns
   */
  private getServiceBasedOnPath(pathId: string) {

    if(pathId == 'tubes') return 'tubes';
    return '';
  }
}
