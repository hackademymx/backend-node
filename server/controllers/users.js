const models = require("../../database/models");

/* Obtener todos los usuarios */
const getUsers = async (req, res) => {
  try {
    const { page, pageSize } = req.query;

    const limit = !pageSize ? 10 : pageSize; // El limite de usuarios totales que retornará.
    const offset = !page ? 0 : page; // Posición de la página, paginación.

    const users = await models.users.findAll({
      where: {
        status: true,
      },
      limit: limit,
      offset: offset,
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

    const user = await models.users.findOne({
      where: {
        id: id,
        status: true,
      },
    });

    if (!user) return res.status(401).send("User does not exist");

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
      name,
      email,
      password,
      role,
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

    const user = await models.users.findOne({
      where: {
        id: params.id,
        status: true,
      },
    });

    if (!user) return res.status(401).send("User does not exist");

    // Actualizarlo ->

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

    const user = await models.users.findOne({
      where: {
        id: id,
        status: true,
      },
    });

    if (!user) return res.status(401).send("User does not exist");

    // Eliminarlo ->

    return res.status(200).send("User deleted successfully");
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
