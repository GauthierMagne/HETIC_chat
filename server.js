/*
Imports
*/

require('dotenv').config();
const express =  require('express');
const path = require('path');
const ejs = require('ejs');
const body_parser =  require('body-parser');


//

/*
Configuration
*/
const server = express();
const port = process.env.PORT


/*
Demarrer le serveur
*/

server.listen(port,()=>{
    console.log(`server is active on port ${port}`);
})