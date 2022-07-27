const mongoose = require('mongoose');
const personalSchema = new mongoose.Schema({
    kurum: {type: String, requird:true},
    isim: {type: String, requird:true},
    mail: {type: String, requird:true},
    unvan: {type: String, requird:true},
    birim: {type: String, requird:true},
    altBirim: {type: String, requird:true},
    numara: {type: Number, requird:true},
    calismaSekli: {type: String, requird:true},
    resim: {type: String, requird:true},
    createdAt:{
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Personal",personalSchema)