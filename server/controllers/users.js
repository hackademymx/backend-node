const models = require("../../database/models");
const bcrypt = require("bcryptjs");

/* Obtener todos los usuarios */
const getUsers = async (req, res) => {
  try {
    const { page, pageSize } = req.query;

    const limit = !pageSize ? 10 : pageSize; // El limite de usuarios totales que retornará.
    const offset = !page ? 0 : page; // Posición de la página, paginación.

    //findAll o findAndCountAll
    const users = await models.users.findAndCountAll({
      where: {
        // "Buscame todos los usuarios dónde su STATUS sea true"
        status: true,
      },
      limit: limit, // "Límite de datos"
      offset: offset, // "Paginación"
      attributes: {
        // "Tráeme todos los atributos excepto" ->
        exclude: ["password", "createdAt", "updatedAt"],
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

    const user = await models.users.findOne({
      where: {
        // "Buscame un usuario dónde su STATUS sea true y su ID sea al req.params.id"
        id: id,
        status: true,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (!user) {
      // Si el usuario no existe, mándamos una alerta al cliente ->
      return res.status(401).send("User does not exist");
    }

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

    //Constrains / restricciones ->
    if (!name) {
      return res.status(401).send("Name is required");
    }

    if (!email) {
      return res.status(401).send("Email is required");
    }

    if (!password) {
      return res.status(401).send("Password is required");
    }

    if (!role) {
      return res.status(401).send("Role is required");
    }

    // El signo "||" es un operador lógico. Donde si una o más condiciones da TRUE, se desencadena.
    if (name.length < 5 || name.length > 20) {
      return res.status(401).send("Name must have between 5 to 20 characters");
    }

    if (email.length < 8 || email.length > 30) {
      return res.status(401).send("Email must have between 8 to 30 characters");
    }

    if (password.length < 5 || password.length > 30) {
      return res
        .status(401)
        .send("Password must have between 5 to 30 characters");
    }

    // Declaraciones AND "&&" -> TODAS las condiciones deben ser TRUE, lo desencadena.
    if (role != "CUSTOMER" && role != "ADMIN") {
      return res.status(401).send("Role can only be: CUSTOMER or ADMIN");
    }

    // Salt: Es un string random que hace al "hash" impredectible. Agrega data random al "Hash".
    // N (en este caso colocamos 10 ) es la cantidad de vueltas que hará y se agregará esa data aleatoria.
    const encPass = bcrypt.hashSync(password, 10);

    const newUser = await models.users.create({
      name: name,
      email: email,
      password: encPass,
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

    const user = await models.users.findOne({
      where: {
        // "Buscame un usuario dónde su STATUS sea true y su ID sea al req.params.id"
        id: params.id,
        status: true,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (!user) {
      return res.status(401).send("User does not exist");
    }

    const userUpdated = await user.update({
      // Con el método UPDATE, actualizamos los datos del usuario.
      name: body.name,
      email: body.email,
    });

    // También tenemos otra opción para actualizar datos ->
    /*await models.users.update(
      {
        name: body.name,
        email: body.email,
      },
      {
        where: {
          id: params.id,
        },
      }
    );*/

    return res.status(201).send({
      msg: "User updated successfully",
      data: userUpdated,
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
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (!user) {
      return res.status(401).send("User does not exist");
    }

    //await user.destroy(); <- Se elimina por completo, pero no es recomendado.

    // Esta opción es más usada ->
    await user.update({
      status: false,
    });

    return res.status(200).send("User deleted successfully");
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

/* Iniciar sesión con un usuario */
/* Autenticación */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await models.users.findOne({
      where: {
        email: email,
        status: true,
      },
      attributes: ["id", "name", "email", "password", "role"],
    });

    if (!user) {
      return res.status(401).send("Email does not exist");
    }

    const match = await bcrypt.compareSync(password, user.password);
    console.log(match);

    if (match === false) {
      return res.status(401).send("Password does not match");
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return res.status(200).send({
      msg: "User logged successfully",
      data: payload,
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
  login,
};
