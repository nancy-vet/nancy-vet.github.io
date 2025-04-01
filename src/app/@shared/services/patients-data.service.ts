import { Injectable } from "@angular/core";
import PatientsCollectionJson from "nv@json/patients/patients.collection.json";
import ProtocolsCollection from "nv@json/patients/protocols.collection.json";

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  private $patientCollection: any = [];
  private $protocolCollection: any = [];

  public $patient() {

    this.$patientCollection = structuredClone(PatientsCollectionJson);
    return this;
  }

  public getAll(): any {
    return this.$patientCollection;
  }



  public $protocols() {

    this.$protocolCollection = structuredClone(ProtocolsCollection);
    return this;
  }

  public getAllprotocols(): any {
    return this.$protocolCollection;
  }
}
