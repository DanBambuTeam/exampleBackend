import express from 'express';
import config from './config';
import {mainRouter} from './routes/routes';

require('./utils/auth');

const app = express();

app.use(express.json());


app.use('api/v1',mainRouter)


app.listen(config.port, () => {
    console.log('API ready from', config.port);
})