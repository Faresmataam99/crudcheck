const User = require('../Models/users');

exports.createUser = async (name, age, email) => {
    try {
      const user = new User({ name, age, email });
      const savedUser = await user.save();
      console.log(savedUser);
    } catch (err) {
      console.err(err.message);
    }
  };
  exports.getUser = async () => {
    try {
      const users = await User.find();
      console.log(users);
    } catch (error) {
      console.err(err.message);
    }
  };
  exports.updateUser = async (id, newData) => {
    try {
      const updateUser = await User.findByIdAndUpdate(id, newData, { new: true });
      console.log('User updated:', updateUser);
    } catch (error) {
      console.err(err.message);
    }
  };
  exports.deleteUser = async (id) => {
    try {
      const deleteUser = await User.findByIdAndRemove(id);
      console.log('User deleted:', deleteUser);
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };
 