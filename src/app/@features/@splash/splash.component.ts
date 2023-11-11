import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector    : 'nv-splash',
  templateUrl : './splash.component.html',
  styleUrls   : ['./splash.component.scss']
})
export class SplashComponent {

  private router: Router  = inject(Router);

  public ngOnInit() {

    setTimeout(() => {
      this.router.navigate([`/library`], { replaceUrl: true });
    }, 2000);
  }

}
