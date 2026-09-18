import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDB from "./config/mongodb.js"
import authRouter from "./routes/authRoutes.js";

const app = express();

const port = process.env.PORT || 3000;

 connectDB();

 app.use(express.json());
 app.use(cors());
 app.use(cookieParser());

app.use("/api/v1", authRouter);

app.listen (port ,()=> console.log(`Server Stared on Port: ${port}`));