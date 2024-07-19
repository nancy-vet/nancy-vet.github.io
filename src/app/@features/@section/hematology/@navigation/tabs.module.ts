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
        path          : 'blood-collection',
        loadChildren  : () => import('../blood-collection/tubes/tubes.module').then(m => m.FeatureModule)
      },
      {
        path          : 'blood-smear-method',
        loadChildren  : () => import('../blood-smear-method/main.module').then(m => m.FeatureModule)
      },
      {
        path          : 'blood-smear-desc',
        loadChildren  : () => import('../blood-smear-desc/probe.module').then(m => m.FeatureModule)
      },
      {
        path          : 'term',
        loadChildren  : () => import('../term/term/term.module').then(m => m.TermPageModule)
      },
      {
        path          : 'blood-composition',
        loadChildren  : () => import('../trivia/main/main.module').then(m => m.FeatureModule)
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
