const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.json());

//Configurando como outras pessoas podem ter acesso a essa API
app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Acess-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

//Conexão com o banco de dados Mongodb
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-hl1li.mongodb.net/omnistack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology : true

}).then(() => { console.log("Conexao feita com sucesso");
}).catch((err)=>{ console.log("Conexao falhou! Error: " + err); 
});


app.use(routes);
app.listen(3333);