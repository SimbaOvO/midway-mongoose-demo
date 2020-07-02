import { providerWrapper } from 'midway';
import * as mongoose from 'mongoose';
import { ISchemaOption } from "../interface";

export function factory() {
  const options: ISchemaOption = {
    modelName: 'Posts',
    collection: 'posts',
    schemaOptions: {
      title: String,
      brief: String,
      time: { type: Date , default: Date.now },
      content: String,
      count: Number,
      isDelete: { type: Number , default: 0 }
    }
  }
  if(mongoose.models[options.modelName]){
    return mongoose.models[options.modelName];
  }
  const Schema = mongoose.Schema
  const schema = new Schema(options.schemaOptions)
  return mongoose.model(options.modelName, schema, options.collection)
}

providerWrapper([
  {
    id: 'postsModel',
    provider: factory
  }
]);