const express=require(`express`);
const app=express.Router();

app.get('/login', (req, res) => {
       res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"action="/product" method="POST"><input id="username"type="text" name="title"><button type="submit">add</button></form>');
     });
     
module.exports=app;    