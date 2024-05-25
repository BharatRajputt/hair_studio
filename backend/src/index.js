import  express  from "express"
import dotenv from 'dotenv'

const app = express()

dotenv.config({
    path:'./env'
})

app.get('/',(req,res)=>{
    res.send("app is running");
})





app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port: ${process.env.PORT || 8000}`);
})
