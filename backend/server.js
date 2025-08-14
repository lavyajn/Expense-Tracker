require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./src/config/db');
const pingRoute = require('./src/routes/ping');
const authRoute = require('./src/routes/authRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

/* console.log('Type of pingRoute:', typeof pingRoute);
console.log('Type of errorHandler:', typeof errorHandler); */

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//routes
app.use('/api/ping',pingRoute);
app.use('/api/auth',authRoute);


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