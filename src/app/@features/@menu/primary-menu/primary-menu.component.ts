import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { IonicModule, MenuController } from "@ionic/angular";

@Component({
  selector    : 'primary-menu',
  templateUrl : './primary-menu.component.html',
  styleUrls   : ['./primary-menu.component.scss'],
  standalone  : true,
  imports     : [
    IonicModule
  ]
})
export class PrimaryMenu {

  private router: Router            = inject(Router);
  private mainMeny: MenuController  = inject(MenuController);

  public processNavigation(segment: string) {

    this.mainMeny.close("first-menu").then(() => {
      this.router.navigate([`/${segment}`]);
    });
  }
}
