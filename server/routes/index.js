const { Router } = require("express");
const router = Router();

const usersRouter = require("./users");
const customersRouter = require("./customers");
const categoriesRouter = require("./categories");
const productsRouter = require("./products");

// Ruta que apunta al CRUD de usuarios.
router.use("/users", usersRouter);

// Ruta que apunta al CRUD de clientes.
router.use("/customers", customersRouter);

// Ruta que apunta al CRUD de categorias.
router.use("/categories", categoriesRouter);

// Ruta que apunta al CRUD de productos.
router.use("/products", productsRouter);

module.exports = router;
