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
    applicationMethod   : ''
  }

  public ngOnInit() {

    const drugProperties                  = this.calculateDose(this.inputPatientModel, this.object);

    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(drugProperties);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")

    this.imagePath                        = this.buildAssetPath();
    this.$uiProperty.title                = this.object.title;
    this.$uiProperty.activeSubstance      = this.object.activeSubstance;

    // this.$uiProperty.drugDose             = parseFloat(drugProperties.drugDose).toFixed(3);
    this.$uiProperty.drugDose             = drugProperties.drugDose //parseFloat(drugProperties.drugDose).toFixed(3);
    this.$uiProperty.activeSubstanceDose  = parseFloat(drugProperties.activeSubstanceDose).toFixed(3);
    // this.$uiProperty.patientDose          = parseFloat(drugProperties.patientDose).toFixed(3);
    this.$uiProperty.patientDose          = drugProperties.patientDose;
    this.$uiProperty.applicationMethod    = drugProperties.applicationMethod;


    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(this.$uiProperty);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@")

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

    // get application characteristics
    const applicationProperties = this.getApplicatyonMethodBasedOnType();
    const activeSubstanceDose   = applicationProperties.activeSubstanceDose;
    const applicationMethod     = applicationProperties.applicationMethod;

    // const patientDose           = patientWeight * activeSubstanceDose;
    // const drugDose              = patientDose / drugConcentration;

    let patientDose:number[] = [];
    let drugDose:number[]    = [];

    for(const activeSubstanceDose of  applicationProperties.activeSubstanceDose) {

      patientDose.push(patientWeight * activeSubstanceDose);
      drugDose.push((patientWeight * activeSubstanceDose) / drugConcentration);
    }

    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log(patientDose)
    console.log(drugDose)
    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log("#$")
    console.log("#$")

    return {
      activeSubstanceDose : activeSubstanceDose   ,
      applicationMethod   : applicationMethod     ,
      patientDose         : patientDose.join(' - ') ,
      drugDose            : drugDose.join(' - ')
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
}
