const express = require("express");
const { route } = require("express/lib/application");
const router =express.Router();

route.get ('/',(req, res)=> {})
    res.send("Listado de Productos");

module.exports=router;


// 23:50 10/6