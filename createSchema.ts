import kindOf from 'kind-of';
import { allSameType } from './helpers/allSameType';
import { typeCheck } from "./helpers/typeCheck";
import { arrayChecking } from "./helpers/arrayChecking";

export function createSchema(baseObj: Record<string, unknown>): Record<string, unknown> {

  try {


    const mainLoop = (obj: Record<string, unknown>): Record<string, unknown> => {
      const res: Record<string, unknown> = {};
      for (const prop in obj) {

        if (!obj.hasOwnProperty(prop)) break;

        const type: string | Record<string, unknown> = typeCheck(obj[prop]);

        res[prop] = type;
      }

      return res;
    };

    return mainLoop(baseObj);

  } catch (err) {
    return err;
  }

}
