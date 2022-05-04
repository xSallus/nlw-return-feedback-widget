import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { router } from './routes';

const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(router);

app.listen(
	PORT,
	()=>console.log(`Server is running at port ${PORT}`)
);