const models = require("../../database/models");

/* Obtener todos los productos */
const getProducts = async (req, res) => {
  try {
    const products = "";

    return res.status(200).send({
      msg: "Products found successfully",
      data: products,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Obtener un producto por su id */
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = "";

    return res.status(200).send({
      msg: "Product found successfully",
      data: product,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Crear un producto */
const createProduct = async (req, res) => {
  try {
    const {} = req.body;

    const newProduct = "";

    return res.status(201).send({
      msg: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Editar un producto */
const updateProduct = async (req, res) => {
  try {
    const { body, params } = req;

    const product = "";

    return res.status(201).send({
      msg: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Eliminar un producto */
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = "";

    return res.status(200).send("Product deleted successfully");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
