const express = require("express");
const router = express.Router();
// const { uploadImages, deleteImages } = require("../controller/uploadCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
// const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");

router.get("/", (req,res)=>res.send("upload Router home") );

// image upload controls( local storage -loaction and name, image file check & resize )
// router.post("/upload-img", authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize, uploadImages );

// router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
