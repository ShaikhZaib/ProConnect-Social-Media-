import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors({
   origin: "https://pro-connect-social-media.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(postRoutes);
app.use(userRoutes);

app.use(express.static("uploads"));

const start = async () => {
  const connectDB = await mongoose.connect(
    "mongodb+srv://shaikhzaib04_db_user:nw9oUS2aATlz01wf@zaib-social-media-appli.spewwca.mongodb.net/?appName=Zaib-Social-Media-Application"
  );

  app.listen(9090, () => {
    console.log("Server is running on port: 9090 ");
  });
};

start();
