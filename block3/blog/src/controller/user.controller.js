const { response } = require("express");
const User = require("../models/User");

exports.getUsers = async (request, response) => {
  try {
    const users = await User.find();
    response
      .status(200)
      .json({ message: "Successfully retrieved users", data: users });
  } catch (error) {
    response.status(400).send(error);
  }
};

exports.getUserById = async (request, response) => {
  const _id = req.params.id;
  try {
    const user = await User.findById({ _id });
    response.send(user);
  } catch (error) {
    response.status(400).send(error);
  }
};

exports.createUser = async (request, response) => {
  const user = new User(request.body);
  try {
    const result = await user.save();
    console.log(result);
    response.send("Successfully created User");
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.updateUser = async (request, response) => {
  const _id = request.params.id;
  const user = request.body;
  try {
    const updatedData = User.findByIdAndUpdate({ _id, ...user });
    response.send(updatedData);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.deleteUser = async (request, response) => {
  const _id = request.params.id;
  console.log(_id);
  try {
    const deleteData = await User.findByIdAndDelete({ _id });
    response.status(200).json({
      message: "Successfully deleted User!",
      data: deleteData,
    });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
