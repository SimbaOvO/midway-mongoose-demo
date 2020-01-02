import { provide, plugin, inject, Context } from 'midway'
import { Mongoose } from 'mongoose';
import { getModel } from './utils';

// @scope(ScopeEnum.Singleton)
@provide()
export class UserModel {

  @plugin()
  mongoose: Mongoose;

  @inject()
  ctx: Context

  getModel() {
    return getModel(this, {
      UserName: String,
      Password: String,
      RegisterTime: { type: Date , default: Date.now },
      Admin: Number
    },
      'User',
      'users'
    )
  }
}