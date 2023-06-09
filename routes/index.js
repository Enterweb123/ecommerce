const router = require('express').Router();

const productRoute = require('./productRoutes');
const authRoute = require('./authRoute');
const blogRoute = require('./blogRouter');
const categoryrouter = require('./CategoryRouter');
const blogcategoryrouter = require('./blogCategoryRouter');
const brandRouter = require('./brandRouter');
const couponRouter = require('./couponRouter')
const colorRouter =require("./colorRoute");
const UploadRouter =require("./uploadRoute");

router.get("/", (req, res) => {
    res.send("Api Router Home")
});

router.use("/user", authRoute);

router.use("/product", productRoute);
router.use("/blog", blogRoute);
router.use("/productcategory", categoryrouter);
router.use("/blogcategory", blogcategoryrouter);
router.use("/brand", brandRouter);
router.use("/coupon", couponRouter);
router.use("/color", colorRouter);
router.use("/upload", UploadRouter);

module.exports = router;