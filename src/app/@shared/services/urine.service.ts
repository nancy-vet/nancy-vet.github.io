import { Injectable } from "@angular/core";
import sedimentJsonDataSource from "nv@json/urine/sediment.collection.json";
import urineParametersJsonDataSource from "nv@json/urine/urine-parameters.collection.json";
import skinJsonDataSource from "nv@json/probe/skin.collection.json";
import trichogramJsonDataSource from "nv@json/probe/trichogram.collection.json";

@Injectable({
  providedIn: "root"
})
export class UrineService {

  public get(groupId: string) {

    if(groupId == 'sediment') return sedimentJsonDataSource;
    if(groupId == 'urine-parameters') return urineParametersJsonDataSource;
    if(groupId == 'skin') return skinJsonDataSource;
    if(groupId == 'trichogram') return trichogramJsonDataSource;
    return [];
  }
}
