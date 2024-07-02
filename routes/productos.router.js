const experess = requiere("express");
const router = experess.Router();

router.get("/", (req, res) => {
    res.send("listado de Productos");
});
module.exports = router;