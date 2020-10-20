
const db = require("quick.db")
const express = require("express")
const app = new express()

app.get('/loginreq', function(req, res) {
    if(req.query.email && req.query.password && db.get(req.query.email + ":" + req.query.password) == true) {
        //res.cookie('key', req.query.email + ":" + req.query.password, {maxAge: 3600000, signed: true});
        res.send("Valid!")
    } else {
        res.send("Invalid!")
    }
});

app.get('/registerreq', function(req, res) {
    if(req.query.email && req.query.password && db.get(req.query.email + ":" + req.query.password) == null) {
        db.set(req.query.email + ":" + req.query.password, true)
        //res.cookie('key', req.query.email + ":" + req.query.password, {maxAge: 3600000, signed: true});
        res.send("Valid!")
    } else {
        res.send("Invalid!")
    }
});
app.listen(1775)
console.log("154.27.68.233:1775")
