import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import postRoute from "./routes/postRoute.js"
import imageratorRoute from "./routes/imageratorRoute.js";
import path from "path"
import { fileURLToPath } from "url";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));


app.use('/api/v1/post',postRoute)
app.use('/api/v1/image',imageratorRoute)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.static(path.join(__dirname, './dist')));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

const startServer = async ()=>{
 try {
    connectDb(process.env.MONGODB_URL);
    app.listen(5606,()=> console.log("server run on port http://localhost:5606"))
 } catch (error) {
    console.log(error)
 }


}

startServer();