import { Component, OnInit, inject    } from "@angular/core";
import { Router                       } from "@angular/router";
import { IonicModule, MenuController  } from "@ionic/angular";
import { AppNavigationRouteEnum } from "nv@models/route.enum";
import { SystemService                } from "nv@services/system.service";

@Component({
  selector    : 'primary-menu',
  templateUrl : './primary-menu.component.html',
  styleUrl    : './primary-menu.component.scss',
  standalone  : true,
  imports     : [
    IonicModule
  ]
})
export class PrimaryMenu implements OnInit {

  private router: Router               = inject(Router);
  private mainMeny: MenuController     = inject(MenuController);
  private systemService: SystemService = inject(SystemService);

  public $buildVersion                 = "";

  public $ui                           = {
    isMainMenuVisible   : true,
    isCalculatorVisible : false
  }

  public ngOnInit() {
    this.$buildVersion = this.systemService.getVersion();
  }

  /**
   * @author Mihail Petrov
   * @param segment
   */
  public processNavigation(segment: string) {

    this.mainMeny.close("first-menu").then(() => {

      //console.log("@@@");
      //console.log(`/${segment}`);

      this.router.navigate([`/${segment}`]);
    });
  }

  public processCalculator() {

    this.$ui.isMainMenuVisible    = false;
    this.$ui.isCalculatorVisible  = true;
  }

  // Show the main menu and hide the calculator submenu
  returnToMainMenu(): void {
    this.$ui.isMainMenuVisible = true;
    this.$ui.isCalculatorVisible = false;
  }
}
