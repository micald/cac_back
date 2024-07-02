const express = require("express");
const app = express();


const path = require("path");
app.use(express.static(path.join(_dirname, "public")));

//  const productosRouter= require("./routes/productos.router.js")

app.use("/productos", require("./routes/productos.router.js"));

app.use("/productos", productosRouter);