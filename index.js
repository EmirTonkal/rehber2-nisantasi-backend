const express = require("express");
const personalsRouter = require("./routes/personals")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyParser.json());
app.use(cors());

const databaseName = "personals"
const username = "admin";
const password = "enPCuFFG3owjJHSm"

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.985ngap.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
  e => {
    if(e){
        console.log(e);
    }
    else{
        console.log("Connected To Database")
    }
  }
);


app.use(personalsRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");
});


const personalData = [
    { id:'number',
    kurum:'string',
    isim:'string',
    mail:'string',
    unvan:'string',
    birim:'string',
    altBirim:'string',
    numara:'number',
    calismaSekli:'string',
    resim:"string"
}
];

