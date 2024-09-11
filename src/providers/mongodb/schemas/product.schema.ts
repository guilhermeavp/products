import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id_company: String,
  name: String,
  quantity: Number,
  minCart: Number,
  maxCart: Number,
  value: Number,
  promotionalValue: Number,
  isPromotion: Boolean,
  producer: String,
  category: String,
  description: String,
  avaliable: Boolean,
});
