const express = require ('express');

const app = express();

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/signup', (req,res) => {
    
})
app.listen(3030);