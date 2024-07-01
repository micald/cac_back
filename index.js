const express =require ("express");
const app = express ();
const productosRouter= require("./routes/productos.router.js")


const path = require("path");
 app.use (express.static(path.join(_dirname, "public")));

 app.use("/productos",productosRouter);