const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log("ERROR:",err);
});

Chat.insertMany([
    {from:"rohan",to:"simran",msg:"did you finish the assignment?",created_at:new Date()},
    {from:"karan",to:"mohit",msg:"send me the project file",created_at:new Date()},
    {from:"isha",to:"riya",msg:"what time is the lecture tomorrow?",created_at:new Date()},
    {from:"dev",to:"arjun",msg:"can you share the notes?",created_at:new Date()},
    {from:"tanya",to:"neel",msg:"are you coming to college today?",created_at:new Date()},
    {from:"varun",to:"aisha",msg:"please send me the practical questions",created_at:new Date()},
    {from:"mehul",to:"pranav",msg:"did you submit the assignment?",created_at:new Date()},
    {from:"kavya",to:"nisha",msg:"can you send me the PDF?",created_at:new Date()},
    {from:"yash",to:"manav",msg:"have you started the project?",created_at:new Date()},
    {from:"aditya",to:"rohit",msg:"let me know when you are free",created_at:new Date()}
])