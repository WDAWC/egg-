'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/article/:id', controller.article.findById);
  router.post('/add', controller.article.createOne);
  router.delete('/delete/:id', controller.article.deleteOne);
  router.post('/update/', controller.article.updateOne);
};
