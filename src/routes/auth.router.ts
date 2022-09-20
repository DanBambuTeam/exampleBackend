import express from 'express';
import passport from 'passport';

import AuthService from '../services/auth.service';

const router = express.Router();
const service = new AuthService();

router.post('/login',
    passport.authenticate('local', { session: false }),
    async (req, res, _next) => {
        try {
            const user = req.body;
            const data = await service.singToken(user);
            res.status(200).json(data);
        } catch (error) {
            throw new Error('Ups! Algo salio mal');
        }
    }

);


export default router;
