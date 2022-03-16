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
- Sequelize Migraciones: https://sequelize.org/v3/docs/migrations/
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

## Pasos para correr migraciones de Sequelize (Con Docker):
- Levantamos nuestros contenedores con el comando: ```docker-compose up```
- Abrimos otra terminal, y escribimos: ```docker ps```
- Les aparecerá información de 1 o más servicios, buscamos y copiamos el CONTAINER ID del servicio de NodeJs. 
- Ingresamos al contenedor del servicio de Nodejs, con el siguiente comando: ```docker exec -ti -u root CONTAINER_ID /bin/bash```  
  - Reemplazamos la palabra CONTAINER_ID por el ID que copiamos
- Estando adentro del contenedor, ejecutaremos las migraciones (comandos) de abajo.
- Chequen sus carpetas de Models y Migrations, y tendrán archivos nuevos.
- Hagan los cambios que requieran hacer en esos archivos generados.
- Hagan sus respectivas "Entidades-Relación". (1:1, 1:N, N:M)
- Cuando ya todo esté listo, ejecutamos en la terminal del contenedor: 
```
npx sequelize db:migrate --url "postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME"
```
  - Reemplazamos las variables DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME por los valores que tienen en sus variables de entorno de su docker-compose.
- Terminando de ejecutarse el comando, vamos a nuestra base de datos para comprobar que los cambios (migraciones) se han realizado.
- Vamos a nuestra terminal del contenedor y escribimos: ```exit```

## Migraciones (comandos) llevadas a cabo en las mentorias:

### PD: Si es la primera vez que vas a crear tus modelos y migraciones, copia y pega cada uno de los comandos de abajo. Pero, si anteriormente ya has ejecutado algunas migraciones en el proyecto (chécalo en tu tabla SequelizeMeta, y en tu carpeta Models y Migrations), comprueba cuáles ya ejecutaste y cuáles no, para que así no hagas migraciones "duplicadas/repetidas", y así nada más ejecutes migraciones nuevas.

### Para crear los modelos:

- npx sequelize model:create --name users --attributes name:string,email:string,password:string,status:boolean,role:enum
- npx sequelize model:create --name products --attributes name:string,description:text,price:integer,stock:integer,status:boolean,categoryId:integer
- npx sequelize model:create --name categories --attributes name:string,label:text,status:boolean
- npx sequelize model:create --name customers --attributes userId:integer,money:integer,status:boolean
- npx sequelize model:create --name productCustomers --attributes productId:integer,customerId:integer,status:boolean

### Para agregar nuevos campos a una tabla:

- npx sequelize migration:generate --name add-field-address-in-users
  - En este comando, queremos agregar el campo "address" al modelo users.
