var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.deleteAllUsers = deleteAllUsers;
UserModel.findAllUsers = findAllUsers;
UserModel.findUser = findUser;


module.exports = UserModel;

function findUser(username,password) {
  return UserModel.findOne({username: username,password: password});
}

function findAllUsers() {
  return UserModel.find({});
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id: userId});
}

function deleteAllUsers() {
  return UserModel.remove({});
}

