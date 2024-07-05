import { Injectable }           from "@angular/core";
import tubesJsonDataSource      from "nv@json/hematology/tubes.collection.json";

@Injectable({
  providedIn: "root"
})
export class BloodCollectionService {

  public get(groupId: string) {

    if(groupId == 'tubes'       ) return tubesJsonDataSource;

    return [];
  }
}
