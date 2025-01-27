import express, {Request, Response} from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

import { JWT_PASSWORD } from "./config"

mongoose.connect("mongodb+srv://aniketsingh2151:WoHozp69WVCRZffn@cluster0.f8dop.mongodb.net/brainlinks")
import { ContentModel, UserModel } from "./db"
import { ExitStatus } from "typescript"
import { userMiddleware } from "./middleware"


const app = express();
app.use(express.json())

app.post("/api/v1/signup", async (req: Request,res: Response) => {
    //Zod pending
    const username = req.body.username
    const password = req.body.password
    try{
        await UserModel.create({
            username,
            password
        })

        res.json("User Signed up")
    }catch(e){
        res.status(411).json({
            "message": e
        })
    }
})


app.post("/api/v1/signin", async (req: Request,res: Response) =>  {
    const username = req.body.username
    const password = req.body.password
    
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({token})
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req: Request,res: Response) => {
    const link = req.body.link;
    const title = req.body.title;

    await ContentModel.create({
        link,
        title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added"
    })
})

app.get("/api/v1/content", userMiddleware, async (req:Request, res:Response)=> {
    //@ts-ignore
    const userId = req.userId
    const content = await ContentModel.findOne({
        userId
    }).populate("userId", "username")

    res.json({
        content
    })
})

app.get("/api/v1/content/title", userMiddleware, async (req: Request, res: Response) => {
    //@ts-ignore
    const userId = req.userId;
    const searchValue = req.query.searchValue;

    const content = await ContentModel.find({
        userId,
        link: {
            $regex: searchValue
        }
    }).populate("userId", "username")
    res.json({content})
})

app.delete("/api/v1/content", userMiddleware, async (req: Request, res: Response) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteOne({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req: Request, res: Response) => {

})

app.listen(3000);   