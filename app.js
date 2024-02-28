import express from "express"
import path from "path"
import mongoose from "mongoose"

const app = express();

mongoose.connect("mongodb://localhost:27017", {
    dbName: "nodejsapi"
}).then(() => console.log("database connected"))
.catch((e) => console.log(e))


app.get("/", (req,res) => {
    res.send("nice working");

})
app.get("/user/all", (req,res) => {
    res.json({
        success: true,
        users:[],
    })  
}) 

app.listen(4000, () => {
    console.log("server is working")
})