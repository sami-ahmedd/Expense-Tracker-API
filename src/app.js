const express  = require('express');
const app = express();

app.get('/', (request , response) => response.send('Home page'));

const PORT = 3000;
app.listen(PORT || 3000 ,console.log(`listening on port ${PORT}`));