import express from 'express';
import { AuthController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

// Example route
authRouter.get(
  '/',
  // middleware de auth, 
  (req, res) => {
    AuthController.get(req, res);
  })

authRouter.post(
  '/checkemail',
  (req, res) => {
    AuthController.checkEmail(req, res);
  }
)

export default authRouter