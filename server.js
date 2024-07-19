const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample articles data
const articles = [
  { id: 1, title: 'Understanding Small Cap Companies' },
  { id: 2, title: 'Investment Strategies for Small Cap Stocks' }
];

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Route to get the welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Small Cap Companies Blog!');
});

// Route to get articles
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// Catch all other routes and return the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
