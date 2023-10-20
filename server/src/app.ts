import express from 'express';
import morgan from "morgan";
import emailRoute from './routes/sendEmail';
 
// Initialize the express engine
export const app: express.Application = express();
app.use(express.json());
app.use(morgan("dev"))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3002'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//Routes
app.use('/api/send-email', emailRoute)
 