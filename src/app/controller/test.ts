import { controller, inject, get, provide, Context } from "midway";
import { UserModel } from "../../model/user";

@provide()
@controller('/test')
export class TestController {
  @inject()  
  userModel: UserModel;

  @inject()
  ctx: Context;

  @get('*')
  async index() {
    this.ctx.body = await this.userModel.getModel().find({})
  }

}
