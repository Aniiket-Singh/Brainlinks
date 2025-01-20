import mongoose, {model, Schema} from "mongoose"
// mongoose.connect("mongodb+srv://aniketsingh2151:WoHozp69WVCRZffn@cluster0.f8dUp.mongodb.net/")


const userSchema = new Schema({
    username: {type: String,
            unique:true
        },
    password: String
})

export const UserModel = model("User", userSchema)

const contentSchema = new Schema ({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

export const contentModel = model("Content", contentSchema)

