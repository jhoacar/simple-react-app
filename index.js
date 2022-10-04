const express = require('express');

const app = express();

app.use('/vanilla',express.static(__dirname+ '/vanilla'));
app.use('/react/cdn',express.static(__dirname+ '/react-cdn'));
app.use('/react/build',express.static(__dirname+ '/react-build/build'));


app.listen(8888, () => {
    console.log("Server on http://localhost:8888")
})