const express=require(`express`);

const router=express.Router();

router.post('/', (req, res) => {
   res.send('<form action="/" onsubmit =document.getElementById(`username`).value=localStorage.getItem(`username`)"  method="POST"><input id="message"type="text" name="message" type="text"placeHolder="message"><input type="hidden" name="username"<button type="submit">add</button></form>');
});


module.exports=router;