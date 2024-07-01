export interface DrugModel {
  type: string;
  title: string;
  activeSubstance: string;
  drugConcentration: number;
  drugConcentrationDecorator: string;
  activeSubstanceDecorator: any;
  convertedActiveSubstanceDecorator: any;
  patientDoseDecorator: any,
  drugDoseDecorator: any,
  application: any;
}
