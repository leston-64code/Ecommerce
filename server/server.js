const express=require("express")
const connectDB=require("./config/db")
const errorMiddleware = require("./middlewares/errorMiddleware")
const cookieParser=require("cookie-parser")
const morgan=require("morgan")
const helmet = require("helmet")
const session = require('express-session');
const MongoStore = require('connect-mongo')

const app=express()
require("dotenv").config()

connectDB()

app.use(session({
    secret: process.env.SESSION_ENCRYPTION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
      maxAge:86400000
    },
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGO_URI,
      crypto: {
        secret: process.env.SESSION_SECRET
      },
    })
  }));

// Middlewares
app.use(morgan("dev"));
app.use(express.json())
app.use(helmet())
app.use(cookieParser())

app.use("/api/user",require("./routes/authRoutes"))

app.use("/api/product",require("./routes/product/productRoutes"))
app.use("/api/productcategory",require("./routes/product/proCategoryRoutes"))
app.use("/api/brand",require("./routes/product/brandRoutes"))

app.use("/api/blog",require("./routes/blog/blogRoutes"))
app.use("/api/blogcategory",require("./routes/blog/blogCategoryRoutes"))


app.use("/api/coupon",require("./routes/couponRoutes"))
app.use("/api/user/address",require("./routes/addressRoutes"))
app.use("/api/cart",require("./routes/cartRoutes"))
app.use("/api/orders",require("./routes/orderRoutes"))
app.use("/api/invoices",require("./routes/invoice/invoiceRoutes"))


app.use(errorMiddleware)

const PORT=process.env.PORT || 4000

const server=app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

// Gracefully handle unexpected errors
process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
  // Close server and exit
  server.close(() => {
      process.exit(1);
  });
});

// Gracefully handle promise rejections
process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
  // Close server and exit
  server.close(() => {
      process.exit(1);
  });
});