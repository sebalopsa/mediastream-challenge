'use strict'

const express = require('express')
const port = 3000
const usersController = require('./controllers/users')

// Setup Express.js app
const app = express()

app.get('/users', (req, res) => usersController.getAllUsersInCsv(req, res))

app.all('*', (req, res) => res.status(405).send('Method Not Allowed'))

app.listen(port, () => console.log(`Server listening on port ${port}`))
