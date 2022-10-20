const express = require('express')
const app = express()

const db = require('./models')
const Sequelize = require('sequelize')
const sequelize = require('./config/database')


db.sequelize
.authenticate()
.then(() => {
    console.log('Sucesso na conexão!')
})
.catch((err => {
    console.error('Erro de conexão:')
}))



app.listen(3000, () => {
    console.log('teste 123...')
})