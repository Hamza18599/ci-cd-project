const express = require('express');
const app = express();
app.get('/', (req,res)=>res.send('Hello from Hamza CI/CD Project!'));
app.listen(8080, ()=>console.log("Running on 8080"));
