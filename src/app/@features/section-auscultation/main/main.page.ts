import { Component, OnInit, inject  } from '@angular/core';
// import { DialogService } from 'nv@services/dialog.service';
import { TriviaService } from 'nv@services/trivia.service';
import { AuscultationService } from 'nv@services/auscultation.service';

@Component({
  selector    : 'page-auscultation',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: AuscultationService   = inject(AuscultationService);
  // private dialogService: DialogService  = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    console.log(serviceId);
    this.$data           = this.$dataService.get(serviceId);

    console.log(this.$data);
  }
}
