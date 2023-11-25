//https://www.youtube.com/watch?v=iuRre1bZ9jw&ab_channel=%D0%93%D0%BE%D1%88%D0%B0%D0%94%D1%83%D0%B4%D0%B0%D1%80%D1%8C
//https://www.youtube.com/watch?v=HCNu_GhESmU&ab_channel=webDev
//const mongoose = require('mongoose');
//const Groups = require('./mainSchema');
const express = require('express');
const { connectToDb, getDb } = require('./db');
const fs = require('fs');


const port = 3001;
const app = express();


let db;

connectToDb((err) => {
    if(!err) {
        app.listen(port, (err)=>{
            err ? console.log(err) : console.log(`Сервер запущен http://localhost:${port}`);       
        });
        db = getDb();
    }else {
        console.log(`DB connection error: ${err}`);
    }
});


app.use(express.static('/Ours/Учеба/Дипломка/newMap/Code'));

app.get('/', (req,res) => {   
    res.sendFile(__dirname+'/myRaion.html');
    const infoFromDb = [];
    db
        .collection('Groups')
        .find()
        .forEach((info) => infoFromDb.push(info))
        .then (() => {
            fs.writeFile('abc.js', 'var groups =' + JSON.stringify(infoFromDb), err => {
                if(err){
                    console.error(err);
                    return;
                };
            });
            
        })
        .catch(() => {
            res
                .status(500)
                .json({ error: "Something goes wrong."}); 
        })
});

