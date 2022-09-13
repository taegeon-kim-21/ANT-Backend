const productController = require("../controllers/control.js");
const router = require("express").Router();

router.get("/allProducts", productController.getAllProducts);

router.get("/getProduct/:id", productController.getProductById);

router.put("/updateProduct/:id", productController.updateProductById);

router.delete("/delProduct/:id", productController.deleteProductById);

router.get("/randomProduct", productController.pickRandomId);

<<<<<<< HEAD

=======
>>>>>>> origin/TaegeonKim
module.exports = router;