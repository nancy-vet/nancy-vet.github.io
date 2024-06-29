import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DrugModel    } from "nv@models/drug.model";
import { PatientModel } from "nv@models/patient.model";

@Component({
  standalone  : true,
  selector    : 'dc-card2',
  templateUrl : './drug-card2.component.html',
  styleUrl    : './drug-card2.component.scss'
})
export class DrugCard2 implements OnInit {

  @Input({required: true  }) public template = 'item';
  @Input({required: true  }) public object!: DrugModel;
  @Input({required: true  }) public inputPatientModel!: PatientModel;

  @Output() public onSelectCard = new EventEmitter();

  public imagePath!: string;

  public $uiProperty = {
    title               : '',
    activeSubstance     : '',

    drugDose            : '0',
    activeSubstanceDose : '0',
    patientDose         : '0',
    applicationMethod   : '',

    drugDoseDecorator   : 'ml'
  }

  public ngOnInit() {

    const drugProperties                  = this.calculateDose(this.inputPatientModel, this.object);

    this.imagePath                        = this.buildAssetPath();
    this.$uiProperty.title                = this.object.title;
    this.$uiProperty.activeSubstance      = this.object.activeSubstance;

    // this.$uiProperty.drugDose             = parseFloat(drugProperties.drugDose).toFixed(3);
    this.$uiProperty.drugDose             = drugProperties.drugDose //parseFloat(drugProperties.drugDose).toFixed(3);
    this.$uiProperty.activeSubstanceDose  = parseFloat(drugProperties.activeSubstanceDose).toFixed(3);
    // this.$uiProperty.patientDose          = parseFloat(drugProperties.patientDose).toFixed(3);
    this.$uiProperty.patientDose          = drugProperties.patientDose;
    this.$uiProperty.applicationMethod    = drugProperties.applicationMethod;

    this.$uiProperty.drugDoseDecorator    = drugProperties.drugConcentrationDecorator
  }

  /**
   * @author Mihail Petrov
   */
  public processCard(): void {
    this.onSelectCard.emit(this.object);
  }

  /**
   * @author Mihail Petrov
   * @returns {string}
   */
  private buildAssetPath(): string {

    if(this.object?.type == 'respiratory'       ) return `/assets/icon/respiratory.png`;
    if(this.object?.type == 'gastrointestinal'  ) return `/assets/icon/gastrointestinal.png`;
    if(this.object?.type == 'cardiovascular'    ) return `/assets/icon/cardiovascular.png`;
    if(this.object?.type == 'urogenital'        ) return `/assets/icon/urogenital.png`;
    if(this.object?.type == 'nervous'           ) return `/assets/icon/nervous.png`;
    if(this.object?.type == 'eyes'              ) return `/assets/icon/eyes.png`;
    if(this.object?.type == 'ears'              ) return `/assets/icon/ears.png`;
    if(this.object?.type == 'skin'              ) return `/assets/icon/skin.png`;
    if(this.object?.type == 'antibiotics'       ) return `/assets/icon/antibiotics.png`;
    if(this.object?.type == 'antiparasitic'     ) return `/assets/icon/antiparasitic.png`;
    if(this.object?.type == 'endocrine'         ) return `/assets/icon/chemotherapeutics.png`;
    if(this.object?.type == 'antiinflammatory'  ) return `/assets/icon/antiinflammatory.png`;
    if(this.object?.type == 'others'            ) return `/assets/icon/others.png`;

    return ``;
  }

  /**
   * @author Mihail Petrov
   * @param {*} drugTemplate
   * @returns
   */
  private calculateDose(patientModel: PatientModel, drugModel: DrugModel) {

    // get patient characteristics
    const patientWeight 			  = patientModel.patientWeight;

    // get drug characteristics
    const drugConcentration     = drugModel.drugConcentration;

    const drugDoseDecorator     = drugModel.drugConcentrationDecorator;

    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log(drugModel)
    console.log(patientModel)
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")
    console.log("@@@@@")

    // get application characteristics
    const applicationProperties = this.getApplicatyonMethodBasedOnType();
    const activeSubstanceDose   = applicationProperties.activeSubstanceDose;
    const applicationMethod     = applicationProperties.applicationMethod;

    let patientDose:number[] = [];
    let drugDose:number[]    = [];

    for(const activeSubstanceDose of  applicationProperties.activeSubstanceDose) {

      patientDose.push(patientWeight * activeSubstanceDose);
      drugDose.push((patientWeight * activeSubstanceDose) / drugConcentration);
    }

    return {
      activeSubstanceDose : activeSubstanceDose   ,
      applicationMethod   : applicationMethod     ,
      patientDose         : patientDose.join(' - ') ,
      drugDose            : drugDose.join(' - '),

      drugConcentrationDecorator : this.decoratorConvertor(drugModel.drugConcentrationDecorator)
    };
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private getApplicatyonMethodBasedOnType() {

    // get infor based on the type of the patient
    // check if we have a specific type of this patient
    // ***
    const animalType = this.inputPatientModel!.patientType;

    if(!animalType) {
      throw new Error("Something whent compleatly wrong");
    }

    // check if animal type is applicable for this drug entity
    // if not - process it with any in mind
    const applicationObject = this.object!.application[animalType];
    const applicationType   = applicationObject ? applicationObject : "any";

    return this.object!.application[applicationType];
  }


  private decoratorConvertor(decorator: any) {

  // Convert decorators:
  if (decorator     == "mg_ml") return "mg/ml";
  if (decorator     == "mg_tabl") return "mg/tabl";

  if (decorator    == "ml") return "ml";
  if (decorator     == "mg_caps") return "mg/caps";
  if (decorator     == "µg_ml") return "µg/ml";

  if (decorator == "mg_kg"            ) return "mg/kg";
  if (decorator == "g"                ) return "g";
  if (decorator == "µg_kg"            ) return "µg/kg";
  if (decorator == "ml"               ) return "ml";
  if (decorator == "ml_kg"            ) return "ml/kg";
  if (decorator == "ml_5_kg"          ) return "ml/5 kg";
  if (decorator == "ml_10_kg"         ) return "ml/10 kg";
  if (decorator == "tabl_5_kg"        ) return "tabl/5 kg";
  if (decorator == "tabl_2.5_kg"      ) return "tabl/2.5 kg";
  if (decorator == "caps_5_kg"        ) return "caps/5 kg";
  if (decorator == "tabl_10_kg"       ) return "tabl/10 kg";
  if (decorator == "implant"          ) return "implant";
  if (decorator == "tabl"             ) return "tabl";
  if (decorator == "gtt"              ) return "gtt";
  if (decorator == "gtt_2_kg"         ) return "gtt/2 kg";
  if (decorator == "cm"               ) return "cm";
  if (decorator == "ml"               ) return "ml";
  if (decorator == "caps"             ) return "caps";
  if (decorator == "sprays"           ) return "sprays";
  if (decorator == "малко количество" ) return "малко количество";
  if (decorator == "няколко капки"    ) return "няколко капки";
  if (decorator == "ampula"           ) return "ампула";
  if (decorator == "paketche"         ) return "пакетче";
  if (decorator == "MU_kg"            ) return "MU/kg";

    return '';
  }

}
