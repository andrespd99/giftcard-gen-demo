import express from 'express';
import path from 'path';
const app = express();

// Serve static files from the "public" directory
app.use(express.static('src'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(3000, function () {
    console.log('App is listening on port 3000');
});