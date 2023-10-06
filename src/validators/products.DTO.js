import { findProductByCode } from '../services/products.services.js'


export const createNewProductDTO = async (req, res, next) => {
  let { code, brand, model, description, category, price } = req.body

  if (!brand) return res.status(400).json({ message: "es requerida una marca para el producto" })
  if (!model) return res.status(400).json({ message: "es requerido un modelo para el producto" })
  if (!description) return res.status(400).json({ message: "es requerida una descripción para el producto" })
  if (!category) return res.status(400).json({ message: "indique una categoría para el producto" })
  if (!price) return res.status(400).json({ message: "indique un precio al producto" })
  if (!code) return res.status(400).json({ message: "es requerido un código para el producto" })
  const productFound = await findProductByCode(code)
  if (productFound) return res.status(400).json({ message: "código de producto ya registrado" })

  req.body = { code, brand, model, description, category, price }

  next()
}