const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World')
});

app.listen(3000, () => {
    console.log('web app is hearing you on port 3000')
})