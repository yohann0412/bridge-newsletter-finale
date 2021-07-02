const express = require('express');
const app = express();

const dotenv = require('dotenv');

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'))

dotenv.config();

app.get('/', (req, res) => {
    res.redirect('/editorial')
})

app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/editorial', (req, res) => {
    res.render('editorial')
})

app.get('/single', (req, res) => {
    res.render('single')
})

app.get('/ah', (req, res) => {
    res.render('AH')
})

app.get('/cd', (req, res) => {
    res.render('CD')
})

app.get('/se', (req, res) => {
    res.render('SE')
})

app.get('/am', (req, res) => {
    res.render('AM')
})

app.get('/cas', (req, res) => {
    res.render('CAS')
})

app.get('/is', (req, res) => {
    res.render('IS')
})

app.get('/dec', (req, res) => {
    res.render('DEC')
})

app.get('/fm', (req, res) => {
    res.render('FM')
})

app.get('/da', (req, res) => {
    res.render('DA');
})

app.get('/ls', (req, res) => {
    res.render('LS');
})

app.get('/bw', (req, res) => {
    res.render('BW');
})

app.get('/pol', (req, res) => {
    res.render('POL');
})

app.get('/tte', (req, res) => {
    res.render('TTE');
})

app.get('/et', (req, res) => {
    res.render('ET');
})

app.get('/gc', (req, res) => {
    res.render('GC')
})

app.get('/si', (req, res) => {
    res.render('INI')
})

app.get('/mtt', (req, res) => {
    res.render('MTT')
})

app.get('/siblings', (req, res) => {
    res.render('SIB')
})

app.get('/new', (req, res) => {
    res.render('NEW')
})

app.get('/funfacts', (req, res) => {
    res.render('FUN')
})




app.listen(process.env.PORT, () => {
    console.log('Newsletter 2 server is running...')
})