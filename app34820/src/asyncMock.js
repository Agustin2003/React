const products = [
  {
    id: '1',
    title: 'https://http2.mlstatic.com/D_NQ_NP_900933-MLA45795207902_052021-W.jpg',
    category: 'categoria1',
    text: 'BUZO BLANCO',
    price: "$2000",
    stock:"10",  
   },
   
  {
    id: '2',
    title: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/678/065/products/el-solitario-wtf-orange-sweatshirt-back_1024x10242x1-ce80debc60ee8a0e7816226652563678-1024-1024.jpeg',
    category: 'categoria2',
    text: 'BUZO NARANJA',
    price: "$1500",
    stock:"7",
   },
  {
    id: '3',
    title: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/029/453/products/restock-crewneck-verde-tiendanube1-0e27f0f2e34f0bc5e616035774968297-240-0.jpg',
    category: 'categoria3',
    text: 'BUZO NEGRO',
    price: "$1850",
    stock:"15",  
  },
  {
    id: '4',
    title: 'https://cdn.quiksilver.com.ar/media/catalog/product/cache/00bc01829449a12aa09b03f7df8987a8/2/2/2222108116-10_1.jpg',
    category: 'categoria1',
    text: 'BUZO VERDE',
    price: "$1300",
    stock:"3",
  }, 
  {
    id: '5',
    title: 'https://http2.mlstatic.com/D_NQ_NP_738598-MLA44941008966_022021-O.webp',
    category: 'categoria2',
    text: 'BUZO ROJO',
    price: "$1500",
    stock:"1",
  },

]

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout (() =>{
        resolve(products)
      }, 500)
    })
  }

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(product => product.category === categoryId))
      }, 500)
    })
  }

  export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout (() =>{
          resolve(products.find(product => product.id === id))
        }, 500)
      })
  } 

