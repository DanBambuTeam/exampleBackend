import express from 'express';
import UserService from '../services/user.service';

const router = express.Router();


const service = new UserService();


router.get('/', async (_req, res, _next) => {
    try {
        const users = await service.find()
        res.status(200).json(users);
    } catch (error) {

    }

});

router.post('/', async (req, res, _next) => {
    try {
        const newitem = req.body;
        console.log(newitem)
        const newUser = await service.create(newitem);
        res.status(201).json(newUser);
 
    } catch (error) {
        throw new Error('Algo anda mal')
    }
});

router.get('/:id', async (req, res, _next) => {
    try {
        const { id } = req.params
        const user = await service.findOne(id);
        res.json(user);
    } catch (error) {
        throw new Error('Ups! Algo salio mal')
    }
});

router.patch('/:id', async (req, res, _next) => {
    try {
        const id = req.params.id;
        const changes = req.body;
        const userUpdated = await service.update(id, changes);
        res.json(userUpdated);
    } catch (error) {
        throw new Error('Ups! Algo salio mal')
    }
});

router.delete('/:id', async (req, res, _next) => {
    try {
        const identifier = req.params.id;
        const userDeleted = await service.delete(identifier);
        res.json(userDeleted);
    } catch (error) {

    }
});


export default router;