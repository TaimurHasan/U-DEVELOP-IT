const db = require('./db/connection');
const express = require('express');
const inputCheck = require('./utils/inputCheck');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// catch all route
app.use((req, res) => {
    res.status(400).end();
})

// start server after DB connection
db.connect(err => {
    if (err) throw err;

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});
