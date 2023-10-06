import {Router} from 'express'
import {getAllProductsCtrl} from '../controllers/products.controller.js'
const productsRouter = Router()

productsRouter.route('/').get(getAllProductsCtrl)


export default productsRouter

