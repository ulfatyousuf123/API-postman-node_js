const express = require("express");
const app = express() ;

/// get task route
app.get("/task", (req, res) =>{
    // res.send()
   return res.json({ message: "this is task route... GET"});
});

///post task route

app.post("/task", (req, res) =>{
    console.log(req.body)
    return res.json({ message: "this is task route ... POST"});
})

 //put task route

app.put("/task",(req,res)=>{
        console.log(req.body)
    return res.json({ message: "this is task route ...  put"});

})
//delete task route
app.delete("/task",(req,res)=>{
        console.log(req.body)
    return res.json({ message: "this is task route ...  delete"});
})

app.listen(6000, () => {
    console.log("Express server is running");
})