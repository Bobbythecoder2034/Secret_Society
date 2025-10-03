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
const hint2 = 'sudoku and solitaire are solitary games'
const hint3 = 'Think of your mouth'
const hint4 = 'bear => bare: similar but different'
const hint5 = 'What is jack inside of?'
const hint6 = 'Think about the positioning.'
const hint7 = 'Typing'

//------Questions------
//===========================================================
app.get('/begin',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle1.html"))
})
app.get('/begin/hint',(req,res)=>{
    res.status(203).json({hint:`${hint1}`})
})
//===========================================================
app.get('/microscope',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle2.html"))
})
app.get('/microscope/hint',(req,res)=>{
    res.status(203).json({hint:`${hint2}`})
})
//===========================================================
app.get('/chess',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle3.html"))
})
app.get('/chess/hint',(req,res)=>{
    res.status(203).json({hint:`${hint3}`})
})
//===========================================================
app.get('/teeth',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle4.html"))
})
app.get('/teeth/hint',(req,res)=>{
    res.status(203).json({hint:`${hint4}`})
})
//===========================================================
app.get('/we_need_to_write_a_new_story',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle5.html"))
})
app.get('/we_need_to_write_a_new_story/hint',(req,res)=>{
    res.status(203).json({hint:`${hint5}`})
})
//===========================================================
app.get('/jack_in_the_box',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle6.html"))
})
app.get('/jack_in_the_box/hint',(req,res)=>{
    res.status(203).json({hint:`${hint6}`})
})
//===========================================================
app.get('/two_eggs_over_easy',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/puzzle7.html"))
})
app.get('/two_eggs_over_easy/hint',(req,res)=>{
    res.status(203).json({hint:`${hint7}`})
})
//===========================================================
app.get('/a_keyboard',(req,res)=>{
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