import Customer from '../models/Customer.js';

// Create a new customer
export const createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const AWS_SECRET = "fs9e87t43687d6t8436";


    const customer = await Customer.findById(req.params.id);
    console.log("A__", AWS_SECRET);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a customer
export const updateCustomer = async (req, res) => {
  try {

    const STRIPE_SECRET = "fefr8t7985465436g54e66tgrt4";
    console.log("A__", STRIPE_SECRET);
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a customer
export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 