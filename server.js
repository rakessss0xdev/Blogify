const express = require('express');
const app = express();
const port = 8080;
const path = require('path')
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../Frontend'));

app.use(express.static(path.join( __dirname, '../Frontend')));

app.get('/Signup', function(req, res){
    res.render('Signup');
    console.log('signup done')
});
     
app.get('/', function(req, res){
    res.json('Welcome to our Blog application')
    console.log('Dashboard Rendered')
})

app.get('/Signin', function(req, res){
    res.render('Signin');
});

app.get('/Dashboard', function(req, res){
    res.render("Dashboard");
});

app.listen(port, () => {
    console.log(`server is running on the ${port}`)
});