const User = require('./../../model/User')

async function getByEmail(email) {
    return await User.findOne({
      email
    });
}

module.exports = {
    getByEmail
  }