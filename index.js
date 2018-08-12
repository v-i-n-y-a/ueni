const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

require('./server')(app);

app.use(express.static('./'));
app.listen(8080, () => console.log('App listening on port 8080'));
