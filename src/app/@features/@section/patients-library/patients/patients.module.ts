import { IonicModule              } from '@ionic/angular';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';

import { PatientsPage             } from './patients.page';

import { PatientInfoModal         } from './@modal/patient-info/patient-info.component';
import { SelectCategoryModal      } from './@modal/select-category/select-category.component';

import { PrimaryMenu              } from 'nv@features/@menu/primary-menu/primary-menu.component';

import { NvRadioComponent         } from 'nv@components/@forms/nv-radio/nv-radio.component';
import { PatientMedicalRecord     } from 'nv@components/@blocks/patient-medical-record/patient-medical-record.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { DosePipe                 } from 'nv@pipes/doce.pipe';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { SplitPipe                } from 'nv@pipes/split.pipe';
import { NvLinkButtonComponent    } from 'nv@components/@forms/nv-link-button/nv-link-button.component';


const routes: Routes = [{
    path      : '',
    component : PatientsPage,
  }
];

@NgModule({
    declarations                    : [
      PatientsPage                  ,
      PatientInfoModal              ,
      SelectCategoryModal
    ],
    imports                         : [
      RouterModule.forChild(routes) ,
      IonicModule                   ,
      CommonModule                  ,
      FormsModule                   ,
      DosePipe                      ,
      SplitPipe                     ,
      PrimaryMenu                   ,
      NvRadioComponent              ,
      PatientMedicalRecord          ,
      NvSearchToolbarComponent      ,
      CategoryPickerComponent       ,
      NvInfoModal                   ,
      NvLinkButtonComponent
    ]
})
export class PatientsPageModule {}
