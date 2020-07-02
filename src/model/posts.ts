import * as Mongoose from 'mongoose'

export interface IPosts extends Mongoose.Document {
  title: string,
  brief: string,
  time: Date
  content: string,
  count: number,
  isDelete: number
}

const PostSchema: Mongoose.Schema = new Mongoose.Schema({
  title: String,
  brief: String,
  time: { type: Date , default: Date.now },
  content: String,
  count: Number,
  isDelete: { type: Number , default: 0 }
})

export default () => Mongoose.model<IPosts>('posts', PostSchema)
// import { provide, plugin } from 'midway'
// import { Mongoose } from 'mongoose';
// import { getModel } from './utils';

// const options = {
//   modelName: 'Posts',
//   collection: 'posts',
//   schemaOptions: {
//     title: String,
//     brief: String,
//     time: { type: Date , default: Date.now },
//     content: String,
//     count: Number,
//     isDelete: { type: Number , default: 0 }
//   }
// }

// @provide()
// export class PostModel {

//   @plugin()
//   mongoose: Mongoose;

//   getModel() {
//     return getModel(this.mongoose, options)
//   }
// }