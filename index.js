const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
const html = `<div><a href="/camisas">Camisas
</a></div>`
res.send(html)
});
app.get('/camisas', (req, res)=>{
    const html = `oi camisas`
    res.send(html)
    });

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});