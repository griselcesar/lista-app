import { getAllProducts, getProductById, createNewProduct, deleteProductById, updateProductById } from '../services/products.services.js'

export const getAllProductsCtrl = async (req, res) => {
  let listProducts = await getAllProducts()
  res.status(200).json({
    count: listProducts.length,
    products: listProducts.map(product => {
      return {
        id: product._id,
        code: product.code,
        brand: product.brand,
        model: product.model,
        description: product.description,
        category: product.category,
        price: product.price,
        exist: product.exist,
        stock: product.stock,
      }
    })
  })
}