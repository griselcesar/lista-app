import {Schema, model} from 'mongoose'

const productSchema = new Schema({
  code:{type:String, unique:true, required:true},
  brand:{type:String,required:true},
  model:{type:String, required:true},
  description:{type:String, required:true},
  category:{type:String, required: true},
  price:{type:Number, required:true},
  exist:{type:Boolean,default:true},
  stock:{type:Number,default:0},
  create:{type:Date, default:Date.now()}
})


export default model('product',productSchema)