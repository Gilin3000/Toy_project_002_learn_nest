import * as express from 'express';

const app: express.Express = express();
const data = [1,2,3,4];

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(req);
    res.send({data});
})

app.listen(8000, () => {
    console.log('server is on...');
})