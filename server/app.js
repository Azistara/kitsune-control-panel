/* 
    index.js
    Main server backend file.

    Author:Azistara
*/

const express = require("express");
const axios = require("axios"); //Axios default
const si = require("systeminformation"); //Systeminformation
const app = express();
const app2 = axios();



app.post("/post", (req, res) => {
  console.log("[OK] Connected to React");
  res.redirect("/");
});

app.get("/", (req, res) => { //Doesn't work?
  console.log("[OK] Hewwo client");
  //res.json({ message: "Hello from the Kitsune Control Panel Backend Server (KCPBS)! UwU" });
  si.cpu(function (data){
    // res.json("---CPU Information---");
    res.json("Manufacturer: " + data.manufacturer);
    // res.json("Brand: " + data.brand);
    // res.json("Clock Speed: " + data.speed);
    // res.json("No of Logical Cores: " + data.cores);
    // res.json("No of Physical Cores: " + data.physicalCores);
  });
});

app2.get("/cpu-info")
  .then(function (response) {
    console.log("[OK] GET header sent using Axios.");
    si.cpu(function (data) {
      // res.json("---CPU Information---");
      res.json("Manufacturer: " + data.manufacturer);
      // res.json("Brand: " + data.brand);
      // res.json("Clock Speed: " + data.speed);
      // res.json("No of Logical Cores: " + data.cores);
      // res.json("No of Physical Cores: " + data.physicalCores);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`[OK] Server started on port ${PORT}`));

/* si.cpu(function (data) {
  console.log("CPU Information:");
  console.log("- manufacturer: " + data.manufacturer);
  console.log("- brand: " + data.brand);
  console.log("- speed: " + data.speed);
  console.log("- cores: " + data.cores);
  console.log("- physical cores: " + data.physicalCores);
  console.log("...");
}); */