import express, { json } from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import app from './apps/apps.js';
import cors from 'cors';
import defalutdata from './default.js';
import razorpay from "razorpay";
import path from 'path';

// const __dirname=path.resolve();

dotenv.config();
const app=express();
export const instance = new razorpay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET,
  });
app.use(json());
app.use(cors( {
    origin:["https://clone-six-sigma.vercel.app"],
    method:["POST","GET"],
    credentials:true
}));
app.use(express.urlencoded({extended:true}));

// app.use(express.static(path.join(__dirname,"./client/build")));

// app.get('*',function(_, res){
//     res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
//         res.status(500).send(err)
//     })
// })

oute.post('/login',async(req,res)=>{
    const {Mobile,Password}=req.body;
    const value=await User.findOne({Mobile:Mobile})
    if(value){
       if(value.Password===Password){
       res.json(value);
       }
       else{
           res.json("Wrong password"); 
       }
    }
    else{
       res.json("User doesn't exit");
    }
   })
   app.post("/signup",async(req,res)=>{
       const data= await new User(req.body);
       const{Mobile,Email}=data;
       const exist=await User.find({Mobile:Mobile,Email:Email})
       if(!exist){
           data.save();
           res.json({
               status:"Sucess",
               data
           })}
       else{
          res.json("User exist");
   }})
   
   app.get("/products",async(req,res)=>{
   const data=await productsSchema.find({})
   res.status(200).json(data)
   }
   )
   
   app.get("/product/:id",async(req,res)=>{
   const {id}=req.params;
   const data=await productsSchema.findOne({'id':id})
   res.status(200).json(data)
   })
   app.post("/cart",async(req,res)=>{
       try{
       const data = await new cartSchema(req.body);
       data.save();
       res.status(200).json({data});
       }
       catch(err){
           console.log(err);
       }
       
   })
   
   app.delete("/remove/:id",async(req,res)=>{
       const {id}=req.params;
       const data=await cartSchema.deleteOne({"id":id})
       res.status(200).json(data)
   })
   
   app.post("/checkout",checkout);
   
   app.post("/paymentverification",paymentVerification)

app.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})

const port=process.env.PORT||8000;
const Username=process.env.DB_Username;
const Password=process.env.DB_Password;
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`);
    connection(process.env.Mongo_URL);
})