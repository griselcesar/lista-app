import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(cors('*'))
app.use(morgan('dev'))

import routesProducts from './routes/products.routes.js'

app.use('/',routesProducts)

export default app