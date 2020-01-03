import { controller, inject, get, provide, Context } from "midway";
import { PostModel } from "../../model/posts";

@provide()
@controller('/posts')
export class PostController {
  @inject()  
  postModel: PostModel;

  @inject()
  ctx: Context;

  @get('/:id')
  async findById () {
    this.ctx.body = await this.postModel.getModel().find({_id: this.ctx.params.id})
  }

  @get('*')
  async index() {
    this.ctx.body = await this.postModel.getModel().find({})
  }

}
