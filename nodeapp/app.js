const express = require ("express")
const app = express();

app.get("/" ,(req,res) => {

    res.send("Service is up and running");
});

app.listen(5000, () => {
    console.log("Server is up")
})