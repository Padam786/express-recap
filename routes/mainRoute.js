
const userRoute = require('./userRoute')
const genralRoute = require("./generalRoute")


function loadRoute(app){
    app.use('/user', userRoute );
    app.use("/genral", genralRoute)
}

module.exports = loadRoute;