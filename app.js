const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB Connection (if needed)
mongoose.connect('mongodb://localhost:27017/himanshu-deployment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Error:', err));

// Set EJS as view engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        email: 'sh.himanshu1291@gmail.com',
        phone: '6350198123'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

