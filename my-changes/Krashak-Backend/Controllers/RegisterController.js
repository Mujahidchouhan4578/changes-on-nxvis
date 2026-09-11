
const registerModel = require("../Models/Register.js");

const registerUser = async (req, res) => {
  try {
    console.log("Registration data received:");
    console.log(req.body);

    const user = new registerModel({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      gender: req.body.gender,
      fathername: req.body.fathername,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      mobile: req.body.mobile,
    });

    const savedUser = await user.save();

    console.log("Registration saved successfully:");
    console.log(savedUser);

    res.status(201).json({
      success: true,
      message: "Registration Successful!",
      data: savedUser,
    });
  } catch (error) {
    console.error("Error saving registration:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to register user.",
      error: error.message,
    });
  }
};

module.exports = registerUser;

