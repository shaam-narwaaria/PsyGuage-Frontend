// const axios = require('axios');

// const BASE_URL = 'https://psyguage-backend.onrender.com/api/auth/register';

// const users = [
//   { name: "Aarav Mehta", email: "aarav.mehta@example.com", password: "Test@123" },
//   { name: "Isha Sharma", email: "isha.sharma@example.com", password: "Test@123" },
//   { name: "Rohan Gupta", email: "rohan.gupta@example.com", password: "Test@123" },
//   { name: "Sneha Nair", email: "sneha.nair@example.com", password: "Test@123" },
//   { name: "Devansh Patel", email: "devansh.patel@example.com", password: "Test@123" },
//   { name: "Kavya Reddy", email: "kavya.reddy@example.com", password: "Test@123" },
//   { name: "Aditya Singh", email: "aditya.singh@example.com", password: "Test@123" },
//   { name: "Pooja Verma", email: "pooja.verma@example.com", password: "Test@123" },
//   { name: "Rahul Joshi", email: "rahul.joshi@example.com", password: "Test@123" },
//   { name: "Neha Desai", email: "neha.desai@example.com", password: "Test@123" }
// ];

// async function registerUsers() {
//   for (const user of users) {
//     try {
//       const res = await axios.post(BASE_URL, user);
//       console.log(`✅ Registered: ${user.email}`);
//     } catch (err) {
//       console.error(`❌ Failed: ${user.email} - ${err.response?.data?.message || err.message}`);
//     }
//   }
// }

// registerUsers();
