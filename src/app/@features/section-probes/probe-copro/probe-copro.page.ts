import { Component, OnInit, inject  } from '@angular/core';
import { DialogService } from 'nv@services/dialog.service';
import { ProbeService } from 'nv@services/probe.service';
import { DetailModal } from './@modal/detail/detail.component';

@Component({
  selector    : 'page-probe-copro',
  templateUrl : './probe-copro.page.html',
  styleUrl    : './probe-copro.page.scss'
})
export class ProbeCoproPage implements OnInit {

  private $probeService = inject(ProbeService);
  private dialogService = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$probeService.get();
  }

  /**
   * @author Mihail Petrov
   * @param element
   */
  public async onSelectCard(element: any) {

    (await this.dialogService.open(DetailModal, {
      selectedObject: element
    }));
  }
}
