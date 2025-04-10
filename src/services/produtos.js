const db = require('../configs');

async function getProdutos () {
  const sql = `
    select id,
           nome,
           custo,
           preco,
           ativo
      from produtos
  `;

  const result = await db.query(sql);
  return result.rows;
}

async function postProduto (params) {
  const sql = `
    insert into produtos (
      id,
      nome,
      custo,
      preco
    ) values (
      $1,
      $2,
      $3,
      $4
    ) returning id
  `;

  const { id, nome, custo, preco } = params;
  const result = await db.query(sql, [id, nome, custo, preco]);
  return result.rows;
}

module.exports = {
  getProdutos,
  postProduto
};
