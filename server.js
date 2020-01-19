const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//DB
const db = require("./config/keys").ModuleURI;

//BODYPARSER
app.use(express.json());

//ROUTES
app.use("/api/items", require("./routes/api/items"));

//SERVER STATIC ASSETS IF IN PRODUCTION
if(process.env.NODE_ENV === "production") {
    //SET STATIC
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

//MONGODB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("MongoDB is connected"));

//SERVERT START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on: " + PORT));