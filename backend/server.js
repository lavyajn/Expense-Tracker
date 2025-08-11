require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const pingRoute = require('./routes/ping');
const errorHandler = require('./middlewares/errorHandler');

/* console.log('Type of pingRoute:', typeof pingRoute);
console.log('Type of errorHandler:', typeof errorHandler); */

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//routes
app.use('/api',pingRoute);

//errorHandling
app.use(errorHandler);

const startServer = async () => {

    try{
        await connectDB();
        app.listen(PORT,() => {
        console.log(`Server is running on ${PORT}`);
    });
    }catch(error){
    console.error('Failed to start server due to database connection error',error);
    process.exit(1);
  }
};

startServer();