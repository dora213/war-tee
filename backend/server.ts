import express,{Request, Response} from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
app.post("/auth/register",async(req: Request,res: Response) =>{
    console.log("Request body:",req.body)
    res.send(req.body);
});
app.listen(port,()=>{
    console.log("server has started an port",port);
})

