const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, //0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dqmcf0p7f/image/upload/v1606743057/avatar/default-profile-picture_wzacjg.jpg",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
