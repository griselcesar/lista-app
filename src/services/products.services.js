import productsModel from '../models/products.model.js'

export const findProductByCode = async (code) => {
  let product = await productsModel.find({ code })
  return product
}

export const getProductById = async (id) => {
  let product = await productsModel.findById(id)
  return product
}

export const getAllProducts = async () => {
  let products = await productsModel.find()
  return products
}

export const createNewProduct = async(newProduct) => {
  let product = productsModel.create(newProduct)
  return product
}

export const deleteProductById = (id) => {
  let product = productsModel.findByIdAndDelete(id)
  return product
}

export const updateProductById = async (id, newData) => {
  let product = productsModel.findByIdAndUpdate(id,newData,{new:true})
  return product
}