const OpenAPIBackend = require('openapi-backend').default;
const express = require('express');
const cors = require('cors');

const petHandler = require('./pet-handlers');

const app = express();
app.use(express.json());
app.use(cors());

const api = new OpenAPIBackend({ definition: './pets.json', handlers: petHandler });

api.init();

app.use((req, res) => api.handleRequest(req, req, res));
app.listen(9000);