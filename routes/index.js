const express = require('express')
const requestRoute = require('./requestsRoute')

const routerApi = (app) => {
  const router = express.Router()
  //path global /api/v1
  app.use('/api/v1', router)
  router.use('/requests', requestRoute)
}

module.exports = routerApi
