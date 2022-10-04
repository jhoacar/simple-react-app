const express = require('express');

const app = express();

app.use('/vanilla',express.static(__dirname+ '/vanilla'));
app.use('/react/cdn',express.static(__dirname+ '/react-cdn'));
app.use('/react/build',express.static(__dirname+ '/react-build/build'));

app.use((req,res)=>{
    res.send(`
        <div>
            <p>Availables Routes</p>
            <ul>
                <li><a href="/vanilla">Vanilla</a></li>
                <li><a href="/react/cdn">React - CDN</a></li>
                <li><a href="/react/build">React - Build</a></li>
            </ul>
        </div>
    `);
})

app.listen(8888, () => {
    console.log("Server on http://localhost:8888")
})