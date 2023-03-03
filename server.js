const express = require('express')
const app = express()
const PORT = process.env.PORT||3000
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Index Printers
app.get(`/`, ( req, res )=>{
   res.render('index.ejs')
});

app.listen(PORT,() => {
    console.log('listening on PORT' , PORT)
})