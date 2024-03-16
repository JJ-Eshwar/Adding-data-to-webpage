const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const port=3000

// ;
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

plnames=['c','c++']
app.get("/",(req,res)=>{
    res.render("Home",{pagetitle:"Home",plnames:plnames})
})
app.post("/",(req,res)=>{
   plnames.push(req.body.plnames)
   res.redirect("/")
})


app.get("/contact",(req,res)=>{
    res.render("contact",{pagetitle:"contact"})
})

app.listen(port, () => console.log(`Server Started at ${port}`));