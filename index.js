const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000


app.use('view-engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Bem vindo ao meu Blog.");
})

app.listen(port, () => console.log(`App listening on port ${port}!`))