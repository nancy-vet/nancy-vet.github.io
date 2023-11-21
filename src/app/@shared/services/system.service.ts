import { Injectable } from "@angular/core";
import buildJson from "nv@assets/build.json";

@Injectable({
  providedIn: 'root'
})
export class BuildVersionService {

  /**
   * @autrhor Mihail Petrov
   * @returns
   */
  public get() {
    return buildJson.buildVersion;
  }
}
