const express = require('express');
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const {Schema}=mongoose;

const teachersSchema=new Schema({
    imgurl:{type:String, required:true},
    name:{type:String, required:true},
    profession:{type:String, required:true},
    about:{type:String, required:true},
    price:{type:Number, required:true},
})

const Teachers=mongoose.model("teachers", teachersSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 8080;

app.get('/teachers', (req, res) => {
    Teachers.find({}, (err, docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(500).json({message:err})
        }
    })
});


app.get('/teachers/:id', (req, res) =>{
    const {id}=req.params;
    Teachers.findById(id, (err, docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
            }
            else{
                res.status(404).json({message: "not found"})
            }
        }
        else{
            res.status(500).json({message:err})
        }
    })
});


app.delete('/teachers/:id', (req, res) =>{
    const {id}=req.params;
    Teachers.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.send("success")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

app.post('/teachers', (req, res) =>{
    let teacher=new Teachers({
        imgurl:req.body.imgurl,
        name:req.body.name,
        profession:req.body.profession,
        price:req.body.price,
        about:req.body.about,
    })

    teacher.save();
    res.send("success")
});




mongoose.connect("mongodb+srv://aliyevag:aliyevag@cluster0.4mvfi79.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(!err){  
app.listen(port, () => 
console.log(`Example app listening on port ${port}!`))
    }
})