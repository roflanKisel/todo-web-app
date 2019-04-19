const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (__req, res) => res.send('root'));

app.listen(port, () => console.log(`Web Api is listening on port ${port}`));
