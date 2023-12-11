import express from 'express';

import { Request, Response } from 'express';

import routes from './routes';

const app = express();

app.use(express.json())

app.use(routes)

app.listen(3333, () => 'server running on port 3333')