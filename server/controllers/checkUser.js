const User = require('../models/User');
const passport = require('passport');

const emailAdmin = 'admin@gmail.com';
const passwordAdmin = 'admin';
const infoAdmin = {
  username: 'admin',
  email: emailAdmin,
  address: '60 Nguyen Van Linh',
  phone: '0789440449',
  orders: []
}

function dummyUser() {
  User.findOne({ email: emailAdmin }).exec((err, user) => {
    if (!err && !user) {
      User.register(infoAdmin, passwordAdmin, () => {
        passport.authenticate('local');
        console.log('CREATE USER: admin/admin');
      });
    }
  })
}

module.exports = {
  dummyUser
};
