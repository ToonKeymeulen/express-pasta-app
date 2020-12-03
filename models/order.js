const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  order_date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  box: { type: Schema.Types.ObjectId, ref: 'Box', required: true },
  amount: { type: String, required: true },
});

// Virtual for order's URL
OrderSchema.virtual('url').get(function () {
  return '/catalog/order/' + this._id;
});

// Export model
module.exports = mongoose.model('Order', OrderSchema);
