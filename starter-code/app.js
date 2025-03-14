const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/views/home-page.html`)
} )

app.get('/about', (req, res)=>{
    res.sendFile(`${__dirname}/views/about-page.html`)
} )

app.get('/images', (req, res)=>{
    res.sendFile(`${__dirname}/views/images-page.html`)
} )

app.listen(3000, ()=>{
    console.log(`server on http://localhost:3000`)
})