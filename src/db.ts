import mongoose, {model, Schema} from "mongoose"
mongoose.connect("mongodb+srv://aniketsingh2151:WoHozp69WVCRZffn@cluster0.f8dop.mongodb.net/")


const userSchema = new Schema({
    username: {type: String,
            unique:true
        },
    password: String
})

export const userModel = model("User", userSchema)