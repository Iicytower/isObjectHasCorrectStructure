import createSchema from './createSchema';
//createSchema(obj)
import checkSchema from './checkSchema';
//checkSchema(schema, toCheckObj)
declare global {
  interface Object {
    createSchema: any;
    checkSchema: any;
  } 
}

function configPrototype() {
  

  Object.prototype.createSchema = function (){
    return createSchema(this);
  };

  Object.prototype.checkSchema = function (schema: Record<string, unknown>){
    return checkSchema(schema, this);
  };

}

export default configPrototype;
