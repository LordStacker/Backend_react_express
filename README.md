# form_backend_express

//////////////////////////////////////######### Español #########/////////////////////////////////////////////
Para comenzar el proyecto los siguientes pasos son necesarios, primero que todo
el testing se realizo con un usuario de postgres.

Paso 1
Ingresar en Consola SQL shell/psql, y hacer inicio de sesion en vuestro usuario

Paso 2
Crear una base de datos con un nombre a usar tanto por el servidor SQL como el codigo de manera local,en este caso la BBDD se llama "USERS//users"

Paso 3
Crear una tabla con los parametros a tratar ene este caso seria

CREATE TABLE USERS (
  ID SERIAL PRIMARY KEY,
  NAMES VARCHAR(20) NOT NULL,
  AGE INTEGER NOT NULL,
  BIRTH DATE NOT NULL
);
Nota: varchar de 20 caracteres propuestos por la empresa para realizar el ejercicio.

Paso 4 
Insertar algun valor puede ser de manera en codigo directamente por el SQL shell/psql o tambien puede ser por medio del PgAdmin o directamente desde la aplicacion
creada en su parte del front end, en caso de ser directo desde el SQL shell podria ser de esta manera.

INSERT INTO USERS (NAMES, AGE, BIRTH)
VALUES  ('Nicola Martinez', 27, '1994-07-01' );

Paso 5
.env
DB_USER=postgres (usuario de la base de datos)
DB_PASSWORD=admin (contraseña del usuario)
DB_HOST=localhost (servidor local)
DB_PORT=5432 (puerto a usar)
DB_DATABASE= users (nombre de la bbdd/base de datos)

config.js
require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

module.exports = { pool }
Se instala la siguiente dependencia:
      npm i cors dotenv express pg
      npm i nodemon
Que es para reiniciar el servidor en caso de algun cambio en codigo

Todos estos valores varian segun usuario sustituyendose respectivamente con los valores que posean en caso de ser distintos del mismo.

Teniendo la configuracion inicial y generando el codigo para poder hacer dichas consultas GET y POST

### Request

`POST /users`
  
  `Metodo post ingresando los 3 valores, con los siguientes formatos, NAMES > Varchar/String , AGE > integer y birth > Date y obteniendo una respuesta 'succeed'`

### Request

`GET /users`

  `Metodo get para traer los valores completos de la tabla`


Procedemos a revisar y efectuar los siguientes comandos:
**npm install (en caso de clonacion para instalar dependencias adyacentes en el)
**npm start para inciar el uso del servidor.

Buena suerte en el testing.



//////////////////////////////////////######### ENGLISH #########/////////////////////////////////////////////

# form_backend_express
To start the project the following steps are necessary, first of all
the testing was done with a postgres user.

Step 1
Enter the SQL console shell / psql, and login to your user

Step 2
Create a database with a name to be used by both the SQL server and the code locally, in this case the DB is called "USERS // users"

Step 3
Creating a table with the parameters to be treated in this case would be

CREATE TABLE USERS (
  SERIAL ID PRIMARY KEY,
  NAMES VARCHAR (20) NOT NULL,
  AGE INTEGER NOT NULL,
  BIRTH DATE NOT NULL
);
Note: varchar of 20 characters proposed by the company to carry out the exercise.

Step 4
Inserting some value can be directly in code by the SQL shell / psql or it can also be through PgAdmin or directly from the application
created in its part of the front end, in case of being direct from the SQL shell it could be this way.

INSERT INTO USERS (NAMES, AGE, BIRTH)
VALUES ('Nicola Martinez', 27, '1994-07-01');

Step 5
.env
DB_USER = postgres (database user)
DB_PASSWORD = admin (user password)
DB_HOST = localhost (local server)
DB_PORT = 5432 (port to use)
DB_DATABASE = users (database / database name)

config.js
require ('dotenv'). config ()

const {Pool} = require ('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql: // $ {process.env.DB_USER}: $ {process.env.DB_PASSWORD} @ $ {process.env.DB_HOST}: $ {process.env.DB_PORT} / $ {process.env. DB_DATABASE} `

const pool = new Pool ({
  connectionString: isProduction? process.env.DATABASE_URL: connectionString,
  ssl: isProduction,
})

module.exports = {pool}
The following dependency is installed:
      npm i cors dotenv express pg
      npm i nodemon
What is to restart the server in case of any change in code

All these values ​​vary according to the user, being substituted respectively with the values ​​that they possess in case of being different from the user.

Having the initial configuration and generating the code to be able to make said GET and POST queries

### Request

`POST / users`
  
   `Post method entering the 3 values, with the following formats, NAMES> Varchar / String, AGE> integer and birth> Date and obtaining a 'succeed' response`

### Request

`GET / users`

   `Get method to fetch full values from table`

We proceed to review and carry out the following commands:
** npm install (in case of cloning to install adjacent dependencies on it)
** npm start to start using the server.

Good luck testing.





