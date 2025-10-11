const express  = require('express');
const app = express();


const PORT = 3000;
app.listen(PORT || 3000 ,console.log(`listening on port ${PORT}`));