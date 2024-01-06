import { Component, OnInit, inject  } from '@angular/core';
// import { DialogService } from 'nv@services/dialog.service';
import { ProbeService } from 'nv@services/probe.service';

@Component({
  selector    : 'page-trivia',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $probeService: ProbeService   = inject(ProbeService);
  // private dialogService: DialogService  = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    const service        = this.getServiceBasedOnPath(serviceId);

    this.$data = this.$probeService.get(service);
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
  private getServiceBasedOnPath(pathId: string): string {

    if(pathId == 'tab1') return 'copro';
    if(pathId == 'tab2') return 'ear';
    if(pathId == 'tab3') return 'skin';
    if(pathId == 'tab4') return 'trichogram';
    return '';
  }
}
