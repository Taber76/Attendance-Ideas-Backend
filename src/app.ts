import express from 'express';
import cors from 'cors';

import { PORT } from './config/environment.js';

import authRouter from './routes/auth.route.js';
import studentsRouter from './routes/students.route.js';

const app = express();

// ---------- Middlewares ----------
app.use(express.json());
app.use(cors());

// ---------- Routes ---------------
app.use('/api', authRouter);
app.use('/api', studentsRouter);

// ---------- Start server ---------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})