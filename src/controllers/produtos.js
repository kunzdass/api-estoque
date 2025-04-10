const service = require('../services/produtos');

async function getProdutos (req, res) {
  try {
    const produtos = await service.getProdutos();
    return res.status(200).json({
      status: 'ok',
      data: produtos
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    })
  }
}

async function postProduto (req, res) {
  try {
    if (!req.body.nome) {
      return res.status(400).json({
        status: 'error',
        message: 'Campos obrigatórios faltando'
      })
    }
    const result = await service.postProduto(req.body);
    return res.status(201).json({
      status: 'ok',
      message: 'Produto cadastrado com sucesso',
      data: result
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro do servidor',
      error: error.message
    })
  }
}


module.exports = {
  getProdutos,
  postProduto
}