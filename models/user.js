var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
    order: [{type: Schema.Types.ObjectId, ref: 'Order'}]
  }
);

// Virtual for user's full name
UserSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});


// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/catalog/User/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);