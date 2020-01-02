export function getModel(_this: any, schemaOptions: any, modelName: string, collection: string) {
  if(_this.mongoose.models[modelName]){
    return _this.mongoose.models[modelName];
  }
  const Schema = _this.mongoose.Schema
  const schema = new Schema(schemaOptions)
  return _this.mongoose.model(modelName, schema, collection)
}