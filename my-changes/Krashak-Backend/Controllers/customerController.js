const Customer = require("../Models/customer");
const {
  sendCustomerConfirmation,
  sendCompanyNotification,
} = require("../services/emailService");

const createCustomer = async (req, res) => {
  try {

    const customer = await Customer.create(req.body);

    // Respond to frontend immediately
    res.status(201).json({
      success: true,
      message: "Customer request submitted successfully",
      data: customer,
    });

    // Send emails after successful creation
    try {

      await sendCustomerConfirmation(customer);

      await sendCompanyNotification(customer);

      console.log("Customer and company emails sent successfully");

    } catch (emailError) {

      console.error(
        "Customer saved but email failed:",
        emailError
      );

    }

  } catch (error) {

    console.error("Customer creation error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create customer request",
    });
  }
};
// READ
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: customers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: customer,
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};