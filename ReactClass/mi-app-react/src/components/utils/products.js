export const products = [
    {id: 1, title:'Lienzo', category: 'Rustico', description:'Color: Natural', price: 580, pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/125/814/products/lienzo00000021-46f83749bccf3635f215887005720737-1024-1024.jpg', stock:'number'},
    {id: 2, title:'Gabardina', category: 'Rustico', description:'Color: Natural', price: 850, pictureUrl: 'https://www.cladd.com.ar/wp-content/uploads/2020/06/i42-021-1-tela-gabardina-trapitos-com-ar-tienda-de-telas-online1-1c1b7157904ce5a74715501791277995-1024-1024.jpg', stock:'number'},
    {id: 3, title:'Panama', category: 'Tapizar', description:'Color: Natural', price: 2000, pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/092/965/products/t19-011-3-tela-panama-crudo-natural-tienda-de-telas-online-trapitos-com-ar11-10cf9a7b28fcb3608c16353686625086-1024-1024.jpg', stock:'number'},
    {id: 4, title:'Blackout', category: 'Cortina', description:'Color: Natural/Blanco/Negro', price: 1500, pictureUrl: 'https://telasxmetro.vteximg.com.br/arquivos/ids/169885-550-550/Blackot-textil---Beige---06.jpg?v=637650868495030000', stock:'number'}
  ]
  
  export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 2000)
    })
  
    return promise
  };