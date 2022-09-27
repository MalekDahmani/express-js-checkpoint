const express = require('express')
const app= express()
const port = 4000

const workingHours = require ('../Middleware/middleware')

app.set('views','../views')
app.set('view engine', 'pug');

app.use(express.static(__dirname + '../public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/',workingHours)


app.get('/',function(req,res){
    res.render('Home',{title:('Home')})
})


app.get('/Services',function(req,res){
    res.render('Services',{title:('Services')})
})

app.get('/Contact',function(req,res){
    res.render('Contact')
})


app.listen(port, function(){
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });