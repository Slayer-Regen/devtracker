const mongoose = require("mongoose");

const codingSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model("CodingSession", codingSessionSchema);
