const path = require('path');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index.routes')
const apiRestRoutes = require('./routes/apiRest.routes')


app.use("/",indexRoutes)

app.use("/apiRest",apiRestRoutes)


app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))
