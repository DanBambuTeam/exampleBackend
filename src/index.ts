import express from 'express';
import config from './config';
import routerApi from './routes/routes';

require('./utils/auth');

const app = express();

app.use(express.json());


routerApi(app);


app.listen(config.port, () => {
    console.log('API ready from', config.port);
})