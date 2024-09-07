import { Injectable }           from "@angular/core";
import DogBreedsJson            from "nv@json/breeds-dog.collection.json";
import CatBreedsJson            from "nv@json/breeds-cat.collection.json";

@Injectable({
  providedIn: "root"
})
export class BreedsService {

  private $intermediateCollection: any = [];

  public $breed() {

    this.$intermediateCollection = structuredClone(DogBreedsJson);
    return this;
  }

  public get(groupId: string) {

    if(groupId == 'dogs'      ) return DogBreedsJson;
    if(groupId == 'cats'      ) return CatBreedsJson;
    return [];
  }


  /**
   * @author Mihail Petrov
   * @param name
   * @returns
   */
  public filterByName(name: any) {


    if(!name) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return (element.name).toLowerCase().includes(name.toLowerCase());

    });

    return this;
  }

}
