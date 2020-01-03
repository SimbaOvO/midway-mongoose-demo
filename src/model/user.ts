import { provide, plugin } from 'midway'
import { Mongoose } from 'mongoose';
import { getModel } from './utils';

const options = {
  modelName: 'Users',
  collection: 'users',
  schemaOptions: {
    UserName: String,
    Password: String,
    RegisterTime: { type: Date , default: Date.now },
    Admin: Number
  }
}

// @scope(ScopeEnum.Singleton)
@provide()
export class UserModel {

  @plugin()
  mongoose: Mongoose;

  getModel() {
    return getModel(this.mongoose, options)
  }
}