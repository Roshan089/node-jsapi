import express from "express"
import path from "path"
import mongoose from "mongoose"
import userRouter from "./Routers/user.js"

const app = express();

//using middlewere
app.use(express.json())
app.use("/user", userRouter)

mongoose.connect("mongodb://localhost:27017", {
    dbName: "nodejsapi"
}).then(() => console.log("database connected"))
.catch((e) => console.log(e))



app.get("/", (req,res) => {
    res.send("nice working");

})
app.listen(4000, () => {
    console.log("server is working")
})