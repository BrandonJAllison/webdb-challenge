const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

server.use(cors());
server.use(helmet());
server.use(express.json());

const projectsRouter = require('./Routes/projects.js');
const actionsRouter = require('./Routes/actions.js');

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send(`
    ----Server is Running----
    `)
});

module.exports = server;