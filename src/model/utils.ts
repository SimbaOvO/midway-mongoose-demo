import { ISchemaOption } from "../interface";

export function getModel(mongoose: any, options: ISchemaOption) {
  if(mongoose.models[options.modelName]){
    return mongoose.models[options.modelName];
  }
  const Schema = mongoose.Schema
  const schema = new Schema(options.schemaOptions)
  return mongoose.model(options.modelName, schema, options.collection)
}
