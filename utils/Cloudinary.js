const cloudinary  = require("cloudinary");
//cloud filemanager manager - like a google drive

  //🔴 cloudinary Configuration 
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRECT_KEY,
  });
  

  //🔴 start cloudinary upload ===========================================
  const cloudinaryUploadImg = async (fileToUploads) => {
  
    return new Promise( (resolve) => {
      cloudinary.uploader.upload(fileToUploads, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    } );
  
  };
  //🔴 end cloudinary upload delete ========================================

  
  //🔴 start cloudinary delete ========================================
  const cloudinaryDeleteImg = async (fileToDelete) => {
    return new Promise((resolve) => {
      cloudinary.uploader.destroy(fileToDelete, (result) => {
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      });
    });
  };
  //🔴 end cloudinary delete ========================================

  module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
  