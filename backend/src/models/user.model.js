const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  loginStatus: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date,
    default: null
  },
  otp: {
    type: String,
    default: null
  },
  otpVerified: {
    type: Boolean,
    default: false
  },
},
  {
    timestamps: true
  });


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcryptjs.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password)
}

userSchema.methods.genrateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    "aarchi",
    {
      expiresIn: "365d"
    }
  )
}

const User = mongoose.model('User', userSchema);

module.exports = User;
