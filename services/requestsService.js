class RequestsService {

  constructor() {
    this.requests = [
      {
        id: "1",
        nombre: 'Cliente 1',
        telefono: 'Telefono 1',
        correo: 'Correo 1',
        product: 'Product 1',
      },
      {
        id: "2",
        nombre: 'Cliente 2',
        telefono: 'Telefono 2',
        correo: 'Correo 2',
        product: 'Product 2',
      }
    ]
  }


  async create(data) {
    const newRequest = {
      id : (this.requests.length + 1).toString(),
      ...data
    }
    this.requests.push(newRequest)
    return newRequest
  }

  async find() {
    return this.requests
  }

  async findOne(id) {
    const request = requests.find(item => item.id === id)
    if(request){
      return this.requests.find(item => item.id === id)
    } else {
      throw new Error('Request not found')
    }
  }

  async update(id,changes) {
    const index = this.requests.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('Request not found')
    }
    this.requests[index] = changes
    return this.requests[index]
  }

  async delete(id) {
    const index = this.requests.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('Product not found')
    }
    this.requests.splice(index,1)
    return { id }
  }
}

module.exports = RequestsService
