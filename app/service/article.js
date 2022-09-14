'use strict';
 
const Service = require('egg').Service;
 
class ArticleService extends Service {
  /**
     * 根据ID获取单个项目
     */
  async getProjectById(id) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({ // Article为modal/article.js里面命名的名字'63208f570f9d245300ff36f2'
        _id: app.mongoose.Types.ObjectId(id),
      });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async add() {
    const { ctx, app } = this;
    console.log(this.ctx.request.body)
    try {
      const results = await ctx.model.Article.create(ctx.request.body);
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async greate(id) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({ // Article为modal/article.js里面命名的名字'63208f570f9d245300ff36f2'
        _id: app.mongoose.Types.ObjectId(id),
      });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async update() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.updateOne({ 
        _id: app.mongoose.Types.ObjectId(ctx.request.body._id),
      },ctx.request.body);
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
  async delete() {
    const { ctx, app } = this;
    console.log(ctx.params)
    try {
      const results = await ctx.model.Article.deleteOne({ 
        _id: app.mongoose.Types.ObjectId(ctx.params.id),
      })
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = ArticleService;