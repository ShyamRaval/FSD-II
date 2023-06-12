const express = require('express');
const app = express();
const path = require('path');

// Define the path to the public directory
const publicPath = path.join(__dirname, '../public');

// Serve static files from the public directory
app.use(express.static(publicPath));

// Handle GET requests to /process-get
app.get('/process-get', (req, res) => {
    const { firstname, password } = req.query;

    // Do something with the firstname and password here
    // For example, you can store them in a database

    // Return a response to the client
    const response = {
        fname: firstname,
        pass: password
    };
    res.send(response);
});

// Start the server
const port = 5454;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
