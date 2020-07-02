import { provide } from "midway";
import { IPostService,IPosts, IPostUpdate } from '../interface/posts'
// import { PostModel } from '../model/posts'
import postsModel from '../model/posts'
import { markdownReg } from "./utils";

@provide('postService')
export class PostService implements IPostService{
  async getPosts(): Promise<IPosts[]>{
      const result: IPosts[] = await postsModel().find()
      return result
  }

  async getPostsById(id: string): Promise<IPosts[]>{
    const result: IPosts[] = await postsModel().find({_id: id})
    return result
  }

  async addCount(id: string): Promise<Boolean>{
    const result: IPostUpdate = await postsModel().updateOne({"_id": id}, {$inc: {"count": 1}})
    if(result.ok){
      return true
    } else {
      return false
    }
  }

  async insert(markdown: string): Promise<IPosts>{
    const insertContent = markdownReg(markdown)
    const result: IPosts = await postsModel().create(insertContent)
    return result
  }
}