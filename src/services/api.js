/* Para listar as categorias disponíveis:
Tipo da requisição: GET
Endpoint: https://api.mercadolibre.com/sites/MLB/categories

Para buscar por itens por termo:
Tipo da requisição: GET
Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY

/descriptions
http://mlb-s2-p.mlstatic.com/743325-MLA43775429220_102020-I.jpg

Para buscar itens por categoria:
Tipo da requisição: GET
Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID


Para buscar itens de uma categoria por termo:
Tipo da requisição: GET
Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY */

export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  return await (await fetch(URL)).json();
}

export async function getProductsFromCategoryAndQuery(categoryId, queryParam) {
  const URL = 'https://api.mercadolibre.com/sites/MLB/search?';
  const obj = await (
    await fetch(`${URL}category=${categoryId}&q=${queryParam}`)
  ).json();
  localStorage.setItem('products', JSON.stringify(obj.results));
  return obj;
}

/* export async function getProductsFromQuery(queryParam) {
  const URL = 'https://api.mercadolibre.com/sites/MLB/search?';
  const { results } = await (await fetch(`${URL}q=${queryParam}`)).json();
  localStorage.setItem('products', JSON.stringify(results));
  return results;
} */

export async function getProductDetails(id) {
  const URL = 'https://api.mercadolibre.com/items/';
  return await (await fetch(`${URL}${id}`)).json();
}
