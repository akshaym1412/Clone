import Axios from 'axios';

export const authenticateSignup=async(details)=>{
 try{
    return await Axios.post("http://localhost:8000/signup",details)
}
catch(err){
  console.log("Error while calling signup api",err)
}}

export const authenticateLogin=async(details)=>{
    try{
       return await Axios.post(" http://localhost:8000/login",details)
   }
   catch(err){
     console.log("Error while calling signup api",err)
   }}

export const products=async()=>{
 const response = await Axios.get(" http://localhost:8000/products")
 return response.data;
}

export const addcart=async(data)=>{
  return await Axios.post(" http://localhost:8000/cart",data);
}