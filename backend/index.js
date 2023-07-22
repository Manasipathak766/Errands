const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
// mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  image: String,
});

// Model
const userModel = mongoose.model("user", userSchema);

// api
app.get("/", (req, res) => {
  res.send("Server is running");
});

// signup api
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email }).exec();
    if (existingUser) {
      console.log(existingUser);
      res.send({ message: "Email id is already registered" });
    } else {
      const data = userModel(req.body);
      const savedData = await data.save();
      console.log(savedData);
      res.send({ message: "Successfully registered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "An error occurred" });
  }
});

// login api
app.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      const dataSend = {
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
        _id: result._id,
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfull",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email Id not registered, kindly Sign Up",
        alert: false,
      });
    }
  } catch (err) {
    // Handle any error that occurred during the query
    console.error(err);
  }
});

//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product",schemaProduct)

// save product data
// api

app.post("/uploadProduct",async(req,res)=>{
  console.log(req.body)
  const data = await productModel(req.body)
  const datasave = await data.save()
  res.send({message:"Successfully Uploaded"})
})

// 
app.get("/product",async(req,res)=>{
  const data = await productModel.find({})
  res.send(JSON.stringify(data))
})

// server is running
app.listen(PORT, () => console.log("server is running at port: " + PORT));
