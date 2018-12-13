const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hello!');
});

app.post('/answer', (req,res)=> {
    res.send("Your Efforts Are Greatly Appreciated!");
});

app.listen(5000, () => {
    console.log('Server started on port 5000...');
});

