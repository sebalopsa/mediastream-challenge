const User = require('../models/User')
const fastCsv = require('fast-csv')

const getAllUsersInCsv = async (req, res) => {
  try {
    const query = User.find()
    const transformer = (doc) => {
      return {
        Id: doc._id,
        Name: doc.name,
        Email: doc.email
      }
    }
    const filename = 'users.csv'
    res.setHeader('Content-disposition', `attachment; filename=${filename}`)
    res.writeHead(200, { 'Content-Type': 'text/csv' })
    res.flushHeaders()
    const csvStream = fastCsv.format({ headers: true }).transform(transformer)
    query.cursor().pipe(csvStream).pipe(res)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = { getAllUsersInCsv }
