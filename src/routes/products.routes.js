import { Router } from 'express'
import {
  getAllProductsCtrl,
  getProductByIdCtrl,
  updateProductByIdCtrl,
  deleteProductByIdCtrl,
  createNewProductCtrl
} from '../controllers/products.controller.js'
import {createNewProductDTO} from '../validators/products.DTO.js'
const productsRouter = Router()

productsRouter.route('/')
  .get(getAllProductsCtrl)
  .post(createNewProductDTO,createNewProductCtrl)
productsRouter.route('/:id')
  .get(getProductByIdCtrl)
  .put(updateProductByIdCtrl)
  .delete(deleteProductByIdCtrl)


export default productsRouter

