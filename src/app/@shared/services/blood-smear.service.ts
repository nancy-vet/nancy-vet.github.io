import { Injectable }   from "@angular/core";
import bloodSmear       from "nv@json/hematology/blood-smear-method.table.json";

@Injectable({
  providedIn: "root"
})
export class BloodSmearService {

  public get(groupId: string) {

    if(groupId == 'blood-smear'       ) return bloodSmear;

    return [];
  }
}
