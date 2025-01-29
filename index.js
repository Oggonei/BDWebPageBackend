const express = require('express');
const app = express();
const port = 8080;
//aquí va tu ip
const IP = "192.168.0.24";
const routerApi = require('./routes/index')

//permite trabajar con jeson dentro de las peticiones
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hola mi server en express')
})

app.listen(port, () => {
    console.log(`http://${IP}:${port}/`)
});

routerApi(app)

