//npm run seed


const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const sampleProducts = [
  {
    name: "Running Shoes",
    price: 2999,
    image: "/images/shoes.jpg",
    description: "Lightweight running shoes for daily training.",
    stock: 50,
  },
  {
    name: "Smart Watch",
    price: 4999,
    image: "/images/smart_watch.jpg",
    description: "Fitness tracking smart watch with heart-rate monitor.",
    stock: 30,
  },
  {
    name: "Headphones",
    price: 1999,
    image: "/images/headphones.jpg",
    description: "Wireless over-ear headphones with noise isolation.",
    stock: 40,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for seeding");

    await Promise.all(
      sampleProducts.map((product) =>
        Product.updateOne({ name: product.name }, { $set: product }, { upsert: true })
      )
    );
    console.log("Sample products updated");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedDatabase();
