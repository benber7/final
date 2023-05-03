const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({extended: true}))
app.set("view engine", hbs);
app.set("views", path.join(__dirname, "./views/pages"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.get("/info", (req, res) => {
    res.sendFile(path.join(__dirname, "/Public/info.html"))
})


app.listen("3000", () => {
    console.log("Server listening at http://localhost:3000")
})