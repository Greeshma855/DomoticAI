import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello World!!");
// })

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});