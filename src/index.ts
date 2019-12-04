import  express from 'express';
import { Request, Response } from 'express';
import { User } from './model';
const app = express();
const {
  PORT = 1338,
} = process.env;
app.get('/', (req: Request, res: Response) => {
  res.json({data: User.find()});
});
app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});

export default app;