var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
    email: { 
        type: String,
        required:true
    },
    name: { 
        type: String,
        required:true
    },
    username: { 
        type: String,
        required:true
    },
    password: { 
        type: String,
        required:true
    }
});
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User = module.exports = mongoose.model('User', UserSchema);