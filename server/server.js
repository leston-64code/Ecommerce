const express=require("express")
const connectDB=require("./config/db")
const errorMiddleware = require("./middlewares/errorMiddleware")

const app=express()
require("dotenv").config()

connectDB()

// Middlewares
app.use(express.json())

app.use("/api/user",require("./routes/authRoutes"))


app.use(errorMiddleware)

const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})