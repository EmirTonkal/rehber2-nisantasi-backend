const express = require('express');
const Personal = require('./models/Personal');


const personalsRouter = express.Router();



personalsRouter.get("/",(req,res) =>{
    Personal.find()
    .then((personal)=>{
        res.json(personal);
    })
    .catch((err)=>{
        res.json(err);
    })
});

personalsRouter.get("/:id",(req,res)=>{
    Personal.findById(req.params.id)
    .then((personal)=>{
        res.json(personal);
    })
    .catch((err)=>{
        res.json(err);
    });
});

personalsRouter.post("/",(req,res)=>{
    const personal = new Personal({
        kurum: req.body.kurum,
        isim: req.body.isim,
        mail: req.body.mail,
        unvan: req.body.unvan,
        birim: req.body.birim,
        altBirim: req.body.altBirim,
        numara: req.body.numara,
        calismaSekli: req.body.calismaSekli,
        resim: req.body.resim

    });
    personal.save();
    res.json(personal);
    res.send('create personal')
});

personalsRouter.put("/:id",(req,res)=>{
    Personal.findByIdAndUpdate(req.params.id,req.body)
    .then((personal)=>{
        res.json(personal);
    })
    .catch((err)=>{
        res.json(err);
    });
});

personalsRouter.delete("/:id",(req,res)=>{
    Personal.findByIdAndDelete(req.params.id)
    .then((personal)=>{
        res.json(personal);
    })
    .catch((err)=>{
        res.json(err);
    });
})
 
module.exports = personalsRouter;

