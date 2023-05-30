const multer = require("multer"); // handle form file data
const sharp = require("sharp"); //modify images
const path = require("path"); // handle to path operations
const fs = require("fs"); // files & folder handling


// 🔴 create storage - in our server space (disk(ssd,hdd) & memory(ram))
const multerStorage = multer.diskStorage({
 
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../public/images/"));
  },

  filename: function (req, file, callback) {
    const uniquesuffix = Date.now() + "-" + Math.round( Math.random() * 1e9 );

  
  // skip . after file name
  const fileName = file.originalname;
  const indexOfDot = fileName.lastIndexOf('.');
  const fileNameWithoutDot = fileName.substring(0, indexOfDot);
  // callback(null, fileNameWithoutDot + "-" + uniquesuffix + ".jpeg");

  callback(null, file.fieldname + "-" + uniquesuffix + ".jpeg");

  },
});


// 🔴 allow only image  files only
const multerFilter = (req, file, callback) => {

  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    
    callback(
      {
      message: "Unsupported file format"
      },
      false
    );
  }

};


// 🔴 file uploaded
const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});


// 🔴 re-size product image - create file uploading path
const productImgResize = async (req, res, next) => {
  if (!req.files) return next();

  await Promise.all( req.files.map( async(file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg") 
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);

      fs.unlinkSync(`public/images/products/${file.filename}`);

    } )
  );

  next();
};


// 🔴 re-size blog image - create file uploading path
const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);

      fs.unlinkSync(`public/images/blogs/${file.filename}`);
       
    })
  );
  next();
};


module.exports = { uploadPhoto, productImgResize, blogImgResize };