const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.use(express.static('public'));


app.set('view engine', 'hbs');
hbs.registerPartials('partials') // way to include partials 

app.get('/', (req, res)=>{
     
    res.render('index',{ name : 'Vinay'});
});

app.get('/about',(req, res)=>{
    //console.log(req.query.name)
    res.render('about', {
    name: req.query.name
    
    });
})
app.get('/about/*' , (req , res)=>{
    res.render('404',{
        errorcomment:"Opps this page couldn't be found ",

    });
});


app.get('*' , (req , res)=>{
    res.render('404');
});

app.listen(port , function(err){
    if(err) console.log(err);
    console.log("Server listening on PORT", port);
});
