// Run this once with: npm run seed
// It clears the products collection and inserts sample data so the
// frontend Home page has something to fetch from the database.

const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const sampleProducts = [
  {
    name: "Running Shoes",
    price: 2999,
    image: "https://via.placeholder.com/200",
    description: "Lightweight running shoes for daily training.",
    stock: 50,
  },
  {
    name: "Smart Watch",
    price: 4999,
    image: "https://via.placeholder.com/200",
    description: "Fitness tracking smart watch with heart-rate monitor.",
    stock: 30,
  },
  {
    name: "Headphones",
    price: 1999,
    image: "https://via.placeholder.com/200",
    description: "Wireless over-ear headphones with noise isolation.",
    stock: 40,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for seeding");

    await Product.deleteMany({});
    console.log("Old products removed");

    await Product.insertMany(sampleProducts);
    console.log("Sample products inserted");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedDatabase();
