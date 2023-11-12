import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name        : 'docePipe',
  standalone  : true
})
export class DosePipe implements PipeTransform {

  public transform(value: any, ...args: any[]) {

    if(value == 'mg_kg'             ) return 'mg/kg';
    if(value == 'µg_kg'             ) return 'µg/kg';
    if(value == 'g'                 ) return 'g';
    if(value == 'ml'                ) return 'ml';
    if(value == 'ml_kg'             ) return 'ml/kg';
    if(value == 'ml_5_kg'           ) return 'ml/5 kg';
    if(value == 'ml_10_kg'          ) return 'ml/10 kg';
    if(value == 'tabl_5_kg'         ) return 'tabl/5 kg';
    if(value == 'tabl_2.5_kg'       ) return 'tabl/2.5 kg';
    if(value == 'caps_5_kg'         ) return 'caps/5 kg';
    if(value == 'tabl_10_kg'        ) return 'tabl/10 kg';
    if(value == 'implant'           ) return 'имплант';
    if(value == 'gtt'               ) return 'gtt';
    if(value == 'gtt_2_kg'          ) return 'gtt/2 kg';
    if(value == 'cm'                ) return 'cm';
    if(value == 'ml'                ) return 'ml';
    if(value == 'caps'              ) return 'caps';
    if(value == 'sprays'            ) return 'sprays';
    if(value == 'ampula'            ) return 'ампула';
    if(value == 'paketche'          ) return 'пакетче';
    if(value == 'MU_kg'             ) return 'MU/kg';
    if(value == 'малко количество'  ) return 'малко количество';
    if(value == 'няколко капки'     ) return 'няколко капки';

    return '';
  }
}
