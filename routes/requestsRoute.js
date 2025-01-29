const express = require('express')
const requestsService = require('../services/requestsService')
const { mkdirSync } = require('fs')

const router = express.Router()
const service = new requestsService()

router.get('/', async (req,res) => {
  const requests = await service.find()
  res.json(requests)
})

router.get('/:id', async (req,res) => {
const {id} = req.params
try {
  const product = await service.findOne(id)
    res.json(product)
} catch (error) {
  res.status(404).json({'msg': 'product not found', 'error': error.message})
}
})

router.post('/', async (req,res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.json({
    msg: 'Solicitud recibida',
    data: newProduct
  })
})

router.patch ('/:id', async (req,res) => {
  try {
    const {id} = req.params
    const body = req.body
    const updateProduct = {
      id,
      ...body
    }
    const product = await service.update(id,updateProduct)
    res.json({
      'msg': 'Solicitud actualizada',
      product
    })
  } catch (error) {
    res.status(404).json({
      msg: 'Product not found',
      error: error.message
    })
  }
})

router.delete ('/:id', async (req,res) => {
  const {id} = req.params
  const product = await service.delete(id)
  res.json({
    'msg': 'Solicitud eliminada',
    product
  })
})


module.exports = router
