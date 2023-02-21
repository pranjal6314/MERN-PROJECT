import mongoose from "mongoose";
const schema = new mongoose.Schema({
  //     Title type, required, minLength, maxLength
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minLength: [5, "Title must be at least 5 characters"],
    maxLength: [80, "Title must be at most 80 characters"],
  },
  // Description type, required, minLength
  description: {
    type: String,
    required: [true, "Please provide a description"],
    minLength: [25, "Description must be at least 25 characters"],
  },
  // Lectures title,description,videos { public_id,url }
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: [true, "Please provide a creator"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", schema);
