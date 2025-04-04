import express from 'express';
import {userRouter} from './routes/userRouter.mjs';
import {courseRouter} from './routes/courseRouter.mjs';
import { adminRouter } from './routes/adminRouter.mjs'; 
import { mongoose } from 'mongoose';
import {config} from 'dotenv'
config();
const app = express()
app.use(express.json())

app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)


async function main(){
    await mongoose.connect(process.env.MONGODB_URI)
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
      });
    }
    
main()