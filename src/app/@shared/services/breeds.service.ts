import { Injectable }           from "@angular/core";
import DogBreedsJson            from "nv@json/breeds-dog.collection.json";
import CatBreedsJson            from "nv@json/breeds-cat.collection.json";

@Injectable({
  providedIn: "root"
})
export class BreedsService {

  public get(groupId: string) {

    if(groupId == 'breeds'      ) return DogBreedsJson;
    return [];
  }
}
