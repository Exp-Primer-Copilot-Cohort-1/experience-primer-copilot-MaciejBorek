// Create web server
// Run: node comments.js
// 1. http://localhost:3000
// 2. http://localhost:3000/comments
// 3. http://localhost:3000/comments/1

// Import express module
const express = require('express');

// Create a web server
const app = express();

// Create a router
const router = express.Router();

// Create a port
const port = 3000;

// Create a middleware
const myLogger = (req, res, next) => {
    console.log(req.url);
    next();
};

// Register middleware
app.use(myLogger);

// Register a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Register a route
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Register a route
router.get('/comments', (req, res) => {
    res.send('Comments');
});

// Register a route
router.get('/comments/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

// Register route
app.use('/', router);

// Run web server
app.listen(port, () => {
    console.log('Web server is running on port ' + port);
});
