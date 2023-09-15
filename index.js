const express= require('express')   //importando el modulo express

const app = express()

//http://localhost:3000/
app.get('/', (request, response)=> { 
    response.send("hello world!")
})


app.listen(3000, ()=> {console.log('listening on port 3000')})