import { controller, inject, get, provide, Context, put, post } from "midway";
import { PostService } from "../../service/posts";

@provide()
@controller('/posts')
export class PostController {

  @inject()
  ctx: Context;

  @inject('postService')
  service: PostService

  @get('/:id')
  async findById () {
    const id = this.ctx.params.id
    this.ctx.body = await this.service.getPostsById(id)
  }

  @put('/addCount/:id')
  async addCount() {
    const id = this.ctx.params.id
    this.ctx.body = await this.service.addCount(id)
  }

  @post('*')
  async insert () {
    const markdown = this.ctx.request.body.markdown
    this.ctx.body = await this.service.insert(markdown)
  }

  @get('*')
  async index() {
    this.ctx.body = await this.service.getPosts()
  }

}
