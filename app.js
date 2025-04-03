import  express  from 'express';
import dotenv from 'dotenv';
import { routerdata } from './router/router.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(routerdata);

app.set('view engine','ejs');

app.listen(PORT,()=>{
    console.log(`Localhost running on PORT ${PORT}`);
})