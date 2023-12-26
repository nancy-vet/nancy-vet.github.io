import { Component, NgModule    } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';
import { IonicModule            } from '@ionic/angular';

import { DrugCard               } from 'nv@components/@blocks/drug-card/drug-card.component';
import { PrimaryMenu            } from 'nv@features/@menu/primary-menu/primary-menu.component';

@Component({
  selector    : 'calculator-navigation',
  templateUrl : 'tabs.page.html'
})
export class TabNavigation {}

const routes: Routes = [
  {
    path      : '',
    component : TabNavigation,
    children  : [
      {
        path          : 'tab1',
        loadChildren  : () => import('../fluid/fluid.module').then(m => m.FluidPageModule)
      },
      {
        path          : 'tab2',
        loadChildren  : () => import('../analysis/analysis.module').then(m => m.AnalysisPageModule)
      },
      {
        path          : 'tab3',
        loadChildren  : () => import('../dose/dose.module').then(m => m.DosePageModule)
      },
      {
        path          : 'tab4',
        loadChildren  : () => import('../poison/poison.module').then(m => m.PoisonPageModule)
      },
      {
        path: '',
        redirectTo    : 'tab1',
        pathMatch     : 'full'
      }
    ]
  }
];

@NgModule({
  declarations                    : [
    TabNavigation
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    DrugCard                      ,
    PrimaryMenu
  ]
})
export class TabsPageModule {}
