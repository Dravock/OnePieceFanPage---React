require('dotenv').config();
const express = require("express");
const cors = require('cors')

const bodyParser = require("body-parser");
const apicache = require("apicache");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const v1LoginRouter = require("./v1/routes/loginRoutes");
const v1GetDataRouter = require("./v1/routes/getDataRoutes");


const app = express(); 
// const cache = apicache.middleware;
const BACKEND_API_PORT = process.env.BACKEND_API_PORT || 3005; 

app.use(cors())
app.use(express.json());

app.use(bodyParser.json());
// app.use(cache("2 minutes"));
app.use("/api/v1/login", v1LoginRouter);
app.use("/api/v1/getData", v1GetDataRouter);

app.listen(BACKEND_API_PORT, () => { 
    console.log(`API is listening on port ${BACKEND_API_PORT}`); 
    V1SwaggerDocs(app,BACKEND_API_PORT);
});
