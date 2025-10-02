import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 5000

// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Static Folder
app.use(express.static(path.join(__dirname,"public")))

//------Hints------
const hint1 = 'scientific instrument for the small'
const hint2 = ''
const hint3 = ''
const hint4 = ''
const hint5 = ''
const hint6 = ''
const hint7 = ''

//------Questions------
//===========================================================
app.get('/begin',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle1.html"))
})
app.get('/begin/hint',(req,res)=>{
    res.status(203).json({hint:`${hint1}`})
})
//===========================================================
app.get('/puzzle2',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle2.html"))
})
app.get('/puzzle2/hint',(req,res)=>{
    res.status(203).json({hint:`${hint2}`})
})
//===========================================================
app.get('/puzzle3',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle3.html"))
})
app.get('/puzzle3/hint',(req,res)=>{
    res.status(203).json({hint:`${hint3}`})
})
//===========================================================
app.get('/puzzle4',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle4.html"))
})
app.get('/puzzle4/hint',(req,res)=>{
    res.status(203).json({hint:`${hint4}`})
})
//===========================================================
app.get('/puzzle5',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle5.html"))
})
app.get('/puzzle5/hint',(req,res)=>{
    res.status(203).json({hint:`${hint5}`})
})
//===========================================================
app.get('/puzzle6',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle6.html"))
})
app.get('/puzzle6/hint',(req,res)=>{
    res.status(203).json({hint:`${hint6}`})
})
//===========================================================
app.get('/puzzle7',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle7.html"))
})
app.get('/puzzle7/hint',(req,res)=>{
    res.status(203).json({hint:`${hint7}`})
})
//===========================================================
app.get('/answer',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/finalPage.html"))
})
//===========================================================





app.use((req, res) => {
    res.sendFile(path.join(__dirname,"public/404.html"))
});
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

//Start Server
app.listen(PORT,()=>{console.log(`Server is listening on http://localhost:${PORT}`)})