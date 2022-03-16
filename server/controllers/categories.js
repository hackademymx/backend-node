const models = require("../../database/models");

/* Obtener todas las categorias */
const getCategories = async (req, res) => {
  try {
    const categories = "";

    return res.status(200).send({
      msg: "Categories found successfully",
      data: categories,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Obtener una categoria por su id */
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = "";

    return res.status(200).send({
      msg: "Category found successfully",
      data: category,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Crear una categoria */
const createCategory = async (req, res) => {
  try {
    const {} = req.body;

    const newCategory = "";

    return res.status(201).send({
      msg: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Editar una categoria */
const updateCategory = async (req, res) => {
  try {
    const { body, params } = req;

    const category = "";

    return res.status(201).send({
      msg: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Eliminar una categoria */
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = "";

    return res.status(200).send("Category deleted successfully");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
