const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("Connection issue");
    console.error(err);
    process.exit(1);
  });

//Image store engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });
// creating upload endpoint for image
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});


const Product = mongoose.model("Product",
{
    id:{
        type: Number,
        required:true,
    },
    name: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        required:true,
    },
    category: {
        type: String,
        required:true,
    },
    new_price: {
        type: Number,
        requires:true,
    },
    old_price: {
        type: Number,
        requires:true,
    },
    date: {
        type: Date,
        default:Date.now,
    },
    available: {
        type: Boolean,
        default:true,
    },
}
)

//api for adding product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({})
    let id
    if (products.length > 0) {
        let last_product_array = products.slice(-1)
      let last_product = last_product_array[0]
      id=last_product.id+1
    }
    else {
      id=1
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product)
    await product.save()
    console.log("saved product")
    res.json({
        success: true,
        name:req.body.name,
    })
})

//api for deleting product
app.post('/removeproduct', async(req, res) => {
  await Product.findOneAndDelete({ id: req.body.id })
  console.log("removed")
  res.json({
    success: true,
    name:req.body.name,
  })
})


//api for getting all product
app.get('/allproduct', async (req, res) => {
  let products = await Product.find({})
  console.log("all product fetched")
  res.send(products)
})

//schema for creating user models
const Users = mongoose.model('Users', {
  
})

app.get("/", (req, res) => {
  res.send("Server is working!!");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});


