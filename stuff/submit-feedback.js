// const axios = require('axios');

// const BASE_URL = 'https://psyguage-backend.onrender.com/api/feedback';

// const feedbacks = [
//   { name: "Vikram Iyer", email: "vikram.iyer12@gmail.com", message: "Really cool games, kept me hooked!" },
//   { name: "Anjali Menon", email: "anjali.menon88@yahoo.com", message: "I loved the Balloon game, it's super fun!" },
//   { name: "Manoj Shetty", email: "manojshetty21@outlook.com", message: "Could use more challenges, but awesome so far." },
//   { name: "Priya Chauhan", email: "priyachauhan07@gmail.com", message: "The design is so clean, I really enjoyed it!" },
//   { name: "Ravi Teja", email: "raviteja.dev@gmail.com", message: "One of the best mind game platforms I’ve seen." },
//   { name: "Sonal Bhatt", email: "sonal.bhatt123@gmail.com", message: "Nice! Would love some multiplayer features." },
//   { name: "Abhinav Jain", email: "abhinav.jain91@gmail.com", message: "Quick games, good for short breaks. Loved it." },
//   { name: "Meera Das", email: "meeradas_01@rediffmail.com", message: "Smooth performance, no lag at all!" },
//   { name: "Yashwant Rao", email: "yash.rao@example.com", message: "Good brain workout – enjoyed playing it daily." },
//   { name: "Divya Nambiar", email: "divya.nambiar20@gmail.com", message: "Just awesome! Keep adding new content please!" }
// ];

// async function submitFeedbacks() {
//   for (const fb of feedbacks) {
//     try {
//       const res = await axios.post(BASE_URL, fb);
//       console.log(`✅ Feedback submitted by: ${fb.name}`);
//     } catch (err) {
//       console.error(`❌ Error for ${fb.name}:`, err.response?.data?.message || err.message);
//     }
//   }
// }

// submitFeedbacks();
