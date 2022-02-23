# Repositorio de Backend con NodeJs

## Stack

- NodeJs y Express
- Docker
- PostgreSQL
- Sequelize ORM

## Instalación de proyecto

Clonar repositorio a tu máquina local:

```
git clone <url repositorio>
```

Abrir tu proyecto desde la terminal, posicionándote en la ruta correspondiente y escribir `code .`
O meter la carpeta dentro de VSC

Abrir la terminal nuevamente y correr el siguiente comando para instalar todas las dependencias NPM del proyecto:

```
npm install
```

Tener docker instalado, ya sea por Linux (de forma nativa) o por Windows y MacOs con Docker Desktop.

Ejecutar los siguientes comandos para poder crear nuestros contenedores y levantarlos ->
Si estás en Linux Ubuntu, no olvides agregar el sudo al comienzo del comando.

Si es primera vez:

```
docker-compose up --build
```

Si ya fue creada anteriormente:

```
docker-compose up
```

## Documentación recomendada

### NodeJs

- NodeJs Main: https://nodejs.org/en
- NodeJs Doc: https://nodejs.org/en/docs
- Cómo instalar Nodejs: https://kinsta.com/es/blog/como-instalar-node-js
- Empresas que usan NodeJs: https://www.clubdetecnologia.net/blog/2017/como-las-grandes-empresas-utilizan-node-js

### Express Framework

- Express Main: http://expressjs.com

### Sequelize ORM

- Sequelize Main: https://sequelize.org/master
- Sequelize Migraciones: https://sequelize.org/master/manual/migrations.html
- Sequelize-cli: https://www.npmjs.com/package/sequelize-cli

## Comandos de Sequelize

### Crear modelo

- sequelize model:create --name Table --attributes name:string,age:integer,etc

### Crear migracion

- sequelize migration:generate --name NombreDemigracion

### Correr migraciones

- sequelize db:migrate --url "postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME"

### Crear seeder

- sequelize seed:generate --name nameSeed

### Correr seeders

- sequelize db:seed:all --url "postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME"

¡Ojo! Si ocurre algún error al intentar ejecutar los comandos de sequelize en la terminal, agregar al inicio:
`npx`
