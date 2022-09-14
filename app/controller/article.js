'use strict';
const Controller = require('egg').Controller;
 
class ArticleController extends Controller {
  async findById() {
    const { ctx } = this;
    const res = await ctx.service.article.getProjectById(ctx.params.id);
    ctx.body = res; // 返回值显示
  }
  async createOne() {
    const { ctx } = this;
    const res = await ctx.service.article.add();
    ctx.body = {
      msg:"ok",
      data:res
    }; // 返回值显示
  }
  async deleteOne() {
    const { ctx } = this;
    const res = await ctx.service.article.delete();
    ctx.body = res; // 返回值显示
  }
  async updateOne() {
    const { ctx } = this;
    const res = await ctx.service.article.update();
    ctx.body = res; // 返回值显示
  }
}
module.exports = ArticleController;