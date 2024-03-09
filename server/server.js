const express=require("express")
const connectDB=require("./config/db")
const errorMiddleware = require("./middlewares/errorMiddleware")
const cookieParser=require("cookie-parser")
const morgan=require("morgan")
const helmet = require("helmet")

const app=express()
require("dotenv").config()

connectDB()

// Middlewares
app.use(morgan("dev"));
app.use(express.json())
app.use(helmet())
app.use(cookieParser())

app.use("/api/user",require("./routes/authRoutes"))
app.use("/api/product",require("./routes/productRoutes"))
app.use("/api/blog",require("./routes/blogRoutes"))
app.use("/api/category",require("./routes/proCategoryRoutes"))
app.use("/api/category",require("./routes/blogCategoryRoutes"))
app.use("/api/brand",require("./routes/brandRoutes"))
app.use("/api/coupon",require("./routes/couponRoutes"))
app.use("/api/user/address",require("./routes/addressRoutes"))
app.use("/api/cart",require("./routes/cartRoutes"))
app.use("/api/orders",require("./routes/orderRoutes"))

app.use(errorMiddleware)

const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})