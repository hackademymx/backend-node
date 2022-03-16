const models = require("../../database/models");

/* Obtener todos los clientes */
const getCustomers = async (req, res) => {
  try {
    const customers = "";

    return res.status(200).send({
      msg: "Customers found successfully",
      data: customers,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Obtener un cliente por su id */
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = "";

    return res.status(200).send({
      msg: "Customer found successfully",
      data: customer,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Editar un cliente */
const updateCustomer = async (req, res) => {
  try {
    const { body, params } = req;

    const customer = "";

    return res.status(201).send({
      msg: "Customer updated successfully",
      data: customer,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Comprar producto por cliente individual */
const buyProductByCustomer = async (req, res) => {
  try {
    const { productId, customerId } = req.body;

    const product = "";
    const customer = "";

    const newProductByCustomer = "";

    return res.status(201).send({
      msg: "Product bought successfully",
      data: newProductByCustomer,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Obtener productos por cliente individual */
const getProductsByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    const customerAndProducts = "";

    return res.status(201).send({
      msg: "Products found successfully",
      data: customerAndProducts,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  updateCustomer,
  buyProductByCustomer,
  getProductsByCustomer,
};
