import { NgModule             } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplashComponent      } from "./splash.component";
import { CommonModule         } from "@angular/common";
import { FormsModule          } from "@angular/forms";
import { IonicModule          } from "@ionic/angular";

const routes: Routes = [{
    path      : '',
    component : SplashComponent
  }
];

@NgModule({
  imports: [
    CommonModule                  ,
    FormsModule                   ,
    IonicModule                   ,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SplashComponent
  ]
})
export class SplashModule {}
