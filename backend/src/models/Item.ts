import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
  code: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  stack: { type: String, required: true },
  in: { type: Date, required: true },
  out: { type: Date },
});

export default model('Item', itemSchema);