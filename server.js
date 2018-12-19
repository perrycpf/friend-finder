let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 3000;



// Built-in middleware funciton to server static files such as images and CSS files
app.use(express.static(path.join(__dirname,'./app/public')));

// Built-in middelware function for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routers
require(path.join(__dirname, './app/routing/apiRoutes.js')) (app);
require(path.join(__dirname, './app/routing/htmlRoutes.js')) (app);

// Starts server listening on PORT
app.listen(PORT, ()=> {
    console.log(`Friend Finder app is listening on PORT: ${PORT}`);
});

