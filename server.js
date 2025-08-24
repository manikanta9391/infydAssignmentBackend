const express=require('express')
const cors=require('cors')
const dbcon=require('./dbCon/db_con')
const exRouter=require('./Routes/routes')




const app=express()
app.use(express.json())
app.use(cors())

dbcon('mongodb+srv://manikanta:manikanta@cluster0.5uoum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.use('/',exRouter)


app.listen(3000,()=>{
    console.log(`server started at the port ${3000}`)
})