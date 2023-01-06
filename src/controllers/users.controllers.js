const User = require('../data/models/User')

const getUsers = async () => {
  const users = await User.find.select('-password')
  return users
}

module.exports = {
  getUsers
}
