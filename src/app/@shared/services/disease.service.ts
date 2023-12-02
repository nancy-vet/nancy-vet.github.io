import { Injectable } from "@angular/core";
import DataJson from "nv@json/diseases/diseases.collection.json";

@Injectable({
  providedIn: "root"
})
export class DiseasesService {

  private $intermediateCollection: any = [];

  public constructor() {
    this.$intermediateCollection = structuredClone(DataJson);
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public getAll(): any {
    return this.$intermediateCollection;
  }

  /**
   * @author Mihail Petrov
   * @param categoryElement
   * @returns
   */
  public filterByCategory(categoryElement: any) {

    if(categoryElement.length == 0) {
      return this;
    }

    const categoryCollection = categoryElement.map((element: any) => {
      return element.category;
    });

    this.$intermediateCollection = DataJson.filter((element) => {
      return categoryCollection.some((o: any) => (element.type).toLowerCase().includes(o.toLowerCase()));
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByTitle(title: any) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return (element.title).toLowerCase().includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByPrimary(id: string, title: string) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return ((element[id]).toLowerCase()).includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param value
   * @param withAproximation
   */
  public getById(value: string, withAproximation = false): any {

    if(!value || value.length == 0) {
      return [];
    }

    const resultCollection = [];
    for(let index = 0; index < DataJson.length; index++ ) {

      const element = DataJson[index];
      const title   = element.title.toLowerCase();

      if(title.includes(value.toLowerCase())) {
        resultCollection.push(element);
      }
    }

    return resultCollection;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public get() {
    return this.$intermediateCollection;
  }
}
