
const express = require('express');
const loadRoute = require('./routes/mainroute');

const app  = express();


app.use(express.json())
app.use(express.urlencoded({
    extended: true  
 
}))



const port = 3000;



loadRoute(app)






app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})












