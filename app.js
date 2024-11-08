const path = require('path');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','home.html')));


app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))
