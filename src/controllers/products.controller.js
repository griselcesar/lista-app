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

export const getProductByIdCtrl = async (req, res) => {
  let { id } = req.params
  const product = await getProductById(id)
  if (!product) return res.status(404).json({ message: "producto no encontrado" })
  return res.status(200).json({
    message: `datos del producto ${product.description}`,
    product: {
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
}

export const deleteProductByIdCtrl = async (req, res) => {
  let { id } = req.params
  const product = await deleteProductById(id)
  if (!product) return res.status(404).json({ message: "producto no encontrado" })
  return res.status(200).json({ message: "producto eliminado correctamente" })
}

export const createNewProductCtrl = async (req, res) => {
  const newProduct = req.body
  console
  const product = await createNewProduct(newProduct)
  return res.status(201).json({
    message: "producto creado correctamente",
    product: {
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
}

export const updateProductByIdCtrl = async (req, res) => {
  let { id } = req.params
  const newDataProduct = req.body
  const product = await updateProductById(id,newDataProduct)
  console.log(product)
  if (!product) return res.status(404).json({ message: "producto no encontrado" })
  return res.status(200).json({
    message: "producto actualizado correctamente",
    product: {
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
}