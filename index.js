const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("accueil.ejs");
})
.get("/contact", (req, res) => {
    res.render('contact.ejs', {title: "Bruxelles - Géographie"});
})
.get('/culture', (req, res) => {
    res.render('culture.ejs', {title: "Bruxelles - Culture"});
})
.get("/galerie", (req, res) => {
    res.render('galerie.ejs', {title: "Bruxelles - Galerie"});
})
.get("/geographie", (req, res) => {
    res.render('geographie.ejs', {title: "Bruxelles - Geographie"});
})
.get("/histoire", (req, res) => {
    res.render('histoire.ejs', {title: "Bruxelles - Histoire"});
})
.get("/liens", (req, res) => {
    res.render('liens.ejs', {title: "Bruxelles - Liens"});
})
.use((req, res, next) => {
   res.status(404).render('page-404.ejs', {title: "404"});
});


app.listen(8080);
