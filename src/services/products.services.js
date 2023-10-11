import productsModel from '../models/products.model.js'

export const findProductByCode = async (code) => {
  let product = await productsModel.findOne({ code })
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
  let product =await productsModel.create(newProduct)
  return product
}

export const deleteProductById = async(id) => {
  let product = await productsModel.findByIdAndDelete(id)
  return product
}

export const updateProductById = async (id, newData) => {
  let product =await productsModel.findByIdAndUpdate(id,newData,{new:true})
  return product
}