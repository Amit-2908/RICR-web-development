import express from 'express';
import { UserLogin,UserLogout,UserRegister } from '../controllers/authcontroller.js';

const router = express.Router();

router.post("/register",UserRegister);
router.post("/login",UserLogin);
router.get("/logout",UserLogout);

export default router;