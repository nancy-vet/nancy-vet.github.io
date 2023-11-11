import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';

import { PatientPicker          } from 'nv@components/@blocks/patient-picker/patient-picker.component';
import { DosePicker             } from 'nv@components/@blocks/dose-picker/dose-picker.component';
import { AnalisysPage           } from './analisys.page';

const routes: Routes = [{
    path      : '',
    component : AnalisysPage,
  }
];

@NgModule({
  imports: [
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    RouterModule.forChild(routes) ,
    PatientPicker                 ,
    DosePicker
  ],
  declarations: [
    AnalisysPage
  ]
})
export class AnalisysPageModule {}
