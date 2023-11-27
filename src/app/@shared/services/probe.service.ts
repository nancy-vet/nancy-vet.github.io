import { Injectable } from "@angular/core";
import coproJsonDataSource from "nv@json/probe/copro.collection.json";
import earJsonDataSource from "nv@json/probe/ear.collection.json";
import skinJsonDataSource from "nv@json/probe/skin.collection.json";

@Injectable({
  providedIn: "root"
})
export class ProbeService {

  public get(groupId: string) {

    if(groupId == 'copro') return coproJsonDataSource;
    if(groupId == 'ear') return earJsonDataSource;
    if(groupId == 'skin') return skinJsonDataSource;

    return [];
  }
}
