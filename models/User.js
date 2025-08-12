// Set up mongoose connection to MONGO DB:
const mongoose = require('mongoose');
const URI = "mongodb+srv://brahimchahlafi273:uBKAV935XklGnN4H@cluster0.prvtdlp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error');
  });

// Schema for App User
const userSchema = new mongoose.Schema({
  username: String,
  createdAt: { type: Date, expires: 86400, default: Date.now }, // Auto Expire document after 1 day
});

const User = mongoose.model('user', userSchema);

module.exports = User;
