import { Component, OnInit, inject  } from '@angular/core';
// import { DialogService } from 'nv@services/dialog.service';
import { ProbeService } from 'nv@services/probe.service';
import { TriviaService } from 'nv@services/trivia.service';

@Component({
  selector    : 'page-trivia',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: TriviaService   = inject(TriviaService);
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
