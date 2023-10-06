import mongoose from 'mongoose'
import { config } from 'dotenv'
import app from './app.js'

config()


mongoose.connect(process.env.URI_DB)
.then(
  console.log('📦 db connect successful'),
  app.listen(process.env.PORT, () => {
    console.log(`🚀 api run on port ${process.env.PORT}`)
  })
).catch(err => {
  console.log(err)
})