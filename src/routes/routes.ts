import express from 'express';
import userRouter from './user.router'

function routerApi(app: any){
    const router = express.Router();
    app.use('/api/v1/', router);

    router.use('/user', userRouter)
}


export default routerApi;
