import { Injectable } from "@angular/core";
import DrugCollectionJson from "nv@json/medication.collection.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private $intermediateCollection: any = [];

  public $medicine() {

    this.$intermediateCollection = structuredClone(DrugCollectionJson);
    return this;
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

    this.$intermediateCollection = DrugCollectionJson.filter((element) => {
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
   * @returns
   */
  public getAllCategories($preset = 'default') {

    if($preset == 'term') return [
      { category: 'blood'           , title: 'ППК'              , imgPath: `/assets/icon/blood.png`             },
      { category: 'coagulant'       , title: 'куаголанти'       , imgPath: `/assets/icon/coagulant.png`         },
      { category: 'urogenital'      , title: 'бъбреци'          , imgPath: `/assets/icon/urogenital.png`        },
      { category: 'liver'           , title: 'черен дроб'       , imgPath: `/assets/icon/liver.png`             },
      { category: 'others'          , title: 'други'            , imgPath: `/assets/icon/others.png`            }
    ];

    return [
      { category: 'respiratory'       , title: 'дихателна'            , imgPath: `/assets/icon/respiratory.png`       },
      { category: 'gastrointestinal'  , title: 'храносмилателна'      , imgPath: `/assets/icon/gastrointestinal.png`  },
      { category: 'cardiovascular'    , title: 'сърдечно-съдова'      , imgPath: `/assets/icon/cardiovascular.png`    },
      { category: 'urogenital'        , title: 'пикочна'              , imgPath: `/assets/icon/urogenital.png`        },
      { category: 'nervous'           , title: 'нервна'               , imgPath: `/assets/icon/nervous.png`           },
      { category: 'eyes'              , title: 'очи'                  , imgPath: `/assets/icon/eyes.png`              },
      { category: 'ears'              , title: 'уши'                  , imgPath: `/assets/icon/ears.png`              },
      { category: 'skin'              , title: 'дерматологични'       , imgPath: `/assets/icon/skin.png`              },
      { category: 'antibiotics'       , title: 'антибиотици'          , imgPath: `/assets/icon/antibiotics.png`       },
      { category: 'antiparasitic'     , title: 'антипаразитни'        , imgPath: `/assets/icon/antiparasitic.png`     },
      { category: 'endocrine'         , title: 'ендокринни'           , imgPath: `/assets/icon/chemotherapeutics.png` },
      { category: 'antiinflammatory'  , title: 'противовъзпалителни'  , imgPath: `/assets/icon/antiinflammatory.png`  },
      { category: 'others'            , title: 'други'                , imgPath: `/assets/icon/others.png`            }
    ];
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
    for(let index = 0; index < DrugCollectionJson.length; index++ ) {

      const element = DrugCollectionJson[index];
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
