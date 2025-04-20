const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes placeholder
app.get('/', (req, res) => {
  res.send('DevTracker Backend Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/api/sessions", sessionRoutes);

const githubRoutes = require("./routes/githubRoutes");
app.use("/api/github", githubRoutes);

const leetcodeRoutes = require("./routes/leetcodeRoutes");
app.use("/api/leetcode", leetcodeRoutes);



require('./cron/githubCron'); // add this at the bottom of your index.js
