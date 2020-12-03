var mongoose = require('mongoose');

const { Schema } = mongoose;

const BoxSchema = new Schema({
  name_box: { type: String, required: true, maxlength: 100 },
  pasta_info: { type: String, required: true },
  vegetarian: { type: String, required: true, enum: ['ja', 'Nee'], default: 'Nee' },
  price: { type: String, required: true },
});

// Virtual for pakket's URL
BoxSchema.virtual('url').get(function () {
  return '/catalog/box/' + this._id;
});

// Export model
module.exports = mongoose.model('Box', BoxSchema);
