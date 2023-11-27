import { Injectable } from "@angular/core";
import jsonDataSource from "nv@json/probe-copro.collection.json";

@Injectable({
  providedIn: "root"
})
export class ProbeService {

  public get() {
    return jsonDataSource;
  }
}
