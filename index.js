const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const { response } = require('express')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getUser = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) =>{
        if (error){
            throw error
        }
        response.status(200).json(results.rows);
    });
}

const addUser = (request, response) => {
    const { names, age, birth } = request.body

    pool.query(
        'INSERT INTO users (names, age, birth) values ($1, $2, $3)',
        [names, age, birth],
        (error) => {
            if (error) {
                throw error
            }
            response.status(201).json({ status: 'success', message: 'Users added. '})
        }
    )
}
app
    .route('/users')
    //GET endpoint
    .get(getUser)
    //POST endpoint
    .post(addUser)    
//Start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening`)
  })