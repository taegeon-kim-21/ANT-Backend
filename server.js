const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose')

var corOptions = {
    origin: "http://localhost:8081"
};


//routers
const router = require('./routes/routes.js');
app.use('/api/', router);



// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing api
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});


//port 3001번 이용중
const PORT = process.env.PORT || 3001;


//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
