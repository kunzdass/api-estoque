const controller = require('../controllers/produtos');
const { verificaToken } = require('../middlewares');

module.exports = (app) => {
  app.get('/produtos', verificaToken, controller.getProdutos);
  app.post('/produtos', controller.postProduto);
}
