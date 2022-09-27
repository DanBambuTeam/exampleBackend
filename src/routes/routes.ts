import { Router } from 'express';
import userRouter from './user.router';
import authRouter from './auth.router';

export const mainRouter = Router();


mainRouter
    .use('/user', userRouter)
    .use('/auth', authRouter)
;

// function routerApi(app: any) {
//     const router = Router();
//     app.use('/api/v1/', router);
//     router.use('/user', userRouter);
//     router.use('/auth', authRouter);
// }


// export default routerApi;
