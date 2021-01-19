require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let journal = require('./controllers/journalController');
let user = require('./controllers/userController');
let calc = require('./controllers/calculatorController');

sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());

app.use('/user', user);
app.use('/journal', journal);
app.use('/calculator', calc);

app.listen(3000, function() {
    console.log("App is listening on port 3000");
});

// localhost:3000
// localhost:3000/journal