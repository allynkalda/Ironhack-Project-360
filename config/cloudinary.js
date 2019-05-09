const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
  cloud_name: 'dm5wxw4gu',
  api_key: '668146968243324',
  api_secret: 'o11HiGxTb9ber-0y2Gj46xIYqTI'
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'demo',
<<<<<<< HEAD
  allowedFormats: ['jpg', 'png'],
  // filename: function (req, file, cb) {
  //   cb(undefined, 'my-file-name')
  // }
=======
  allowedFormats: ['jpg', 'png']
>>>>>>> 9dce381c26ce2c905d529c69b018fc58184cc869
})

const parser = multer({ storage: storage })

module.exports = parser
