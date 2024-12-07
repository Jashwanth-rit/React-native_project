// Import Mongoose and dotenv (for environment variables)
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User, Customer, DeliveryPartner, Branch, Admin, Category, Product } from '../models/users.js'; // Adjust path as necessary

// Load environment variables from .env file
dotenv.config();

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(mongoURI,{ssl: false}
     
 
    );
    console.log('MongoDB connected successfully');
  } catch (error) {
    // Handle any connection errors
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};


// async function seedDatabase() {
//   try {
//     // Clear existing data
//     await Category.deleteMany({});
//     await Product.deleteMany({});

//     // Create Category documents
//     const categories = await Category.insertMany([
//       { name: "Milk, Curd & Paneer", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444869/category/cq7m7yxuttemyb4tkidp.png" },
//       { name: "Pharma & Wellness", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444870/category/n438dcddfgrhyq9mck3z.png" },
//       { name: "Vegetables & Fruits", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444869/category/uic8gcnbzknosdvva13o.png" },
//       { name: "Munchies", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444869/category/vyakccm3axdyt8yei8wc.png" },
//       { name: "Home & Office", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444869/category/diucqrlsuqympqtwdkip.png" },
//       { name: "Baby Care", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444870/category/f6er254kgnmymlbguddd.png" },
//       { name: "Ata, Rice & Dal", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444869/category/flyjbsigiuxsd4pbwpjb.png" },
//       { name: "Cleaning Essentials", image: "https://res.cloudinary.com/dponzgerb/image/upload/v1723444869/category/pfbuktnsxdub5njww7tj.png" },
//     ]);

//     // Map category names to their IDs for reference in products
//     const categoryMap = categories.reduce((map, category) => {
//       map[category.name] = category._id;
//       return map;
//     }, {});

//     // Create Product documents
//     const products = await Product.insertMany([
//       {
//         name: "Amul Gold Cream Milk",
//         price: 34,
//         discountPrice: 38,
//         quantity: "500 ml",
//         imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
//         category: categoryMap["Milk, Curd & Paneer"]
//       },
//       {
//         name: "Gowardhan Panner",
//         price: 89,
//         discountPrice: 99,
//         quantity: "200 g",
//         imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/123007a.jpg?ts=1688973208",
//         category: categoryMap["Milk, Curd & Paneer"]
//       },
//       {
//         name: "Lay's India's Magic Masala Potato Chips",
//         price: 16,
//         discountPrice: 20,
//         quantity: "48 g",
//         imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7bc1df93-0002-47c3-bea3-7b92bcf09c8c.jpg?ts=1720514361",
//         category: categoryMap["Munchies"]
//       },
//     ]);

//     console.log('Database seeded successfully');
//     mongoose.disconnect();  // Close the connection
//   } catch (error) {
//     console.error('Error seeding the database:', error);
//   }
// }

// seedDatabase();

// Export the connection function
export default connectDB;
