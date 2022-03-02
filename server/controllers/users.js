const models = require("../../database/models");

/* Obtener todos los usuarios */
const getUsers = async (req, res) => {
  try {
    const { page, pageSize } = req.query;

    const limit = !pageSize ? 10 : pageSize; // El limite de usuarios totales que retornará.
    const offset = !page ? 0 : page; // Posición de la página, paginación.

    //findAndCountAll
    const users = await models.users.findAll({
      where: {
        status: true,
      },
    });

    return res.status(200).send({
      msg: "Users found successfully",
      data: users,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Obtener un usuario por su id */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = "";

    return res.status(200).send({
      msg: "User found successfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Crear un usuario */
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = await models.users.create({
      name: name,
      email: email,
      password: password,
      role: role,
    });

    return res.status(201).send({
      msg: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Editar un usuario */
const updateUser = async (req, res) => {
  try {
    const { body, params } = req;

    const user = "";

    return res.status(201).send({
      msg: "User updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Eliminar un usuario */
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = "";

    return res.status(200).send("User deleted successfully");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Iniciar sesión con un usuario */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = "";

    return res.status(200).send({
      msg: "User logged successfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
