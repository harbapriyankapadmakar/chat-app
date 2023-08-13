const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const login=require("./routes/login.js");
const message=require("./routes/message.js");
const fs=require("fs");
app.use(bodyParser.urlencoded());
app.post("/login", (req, res) => {
    res.send('<form action="/" onsubmit =document.getElementById(`username`).value=localStorage.getItem(`username`)"  method="POST"><input id="message"type="text" name="message" type="text"placeHolder="message"><input type="hidden" name="username"<button type="submit">add</button></form>');
 });

app.get("/", (req, res) => {
    res.send(`<form action="/"  method="POST" onsubmit ="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" id="message">
     <input type="hidden" name="username" id="username">
     <button type="submit">send</button></form>`);
 });

app.post("/",(req,res) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("message.txt",`${req.body.username}:${req.body.message}`,{flag: `a`} , (err) =>
     err ? console.log(err):res.redirect("/")
    );
 });

app.get("/login", (req, res) => {
    fs.readFile("message.txt",(err,data) => {
       if(err){
        console.log(err)
        data='no chat exxist'
       }
     
    res.send(`${data}<form action="/"  method="POST" onsubmit ="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" id="message">
     <input type="hidden" name="username" id="username">
     <button type="submit">send</button></form>`);
        
        
    });
});



 app.listen(4000);

