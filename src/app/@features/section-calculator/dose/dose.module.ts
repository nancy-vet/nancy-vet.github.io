import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { DosePage               } from './dose.page';

import { PatientPicker          } from 'nv@components/@blocks/patient-picker/patient-picker.component';
import { RouterModule, Routes   } from '@angular/router';
import { PrimaryMenu            } from '../../@menu/primary-menu/primary-menu.component';
import { DrugCard2              } from 'nv@components/@blocks/drug-card2/drug-card2.component';

const routes: Routes = [{
    path      : '',
    component : DosePage,
  }
];

@NgModule({
  declarations: [
    DosePage
  ],
  imports: [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    PatientPicker                 ,
    PrimaryMenu                   ,
    DrugCard2
  ]
})
export class DosePageModule {}
