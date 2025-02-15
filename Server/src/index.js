const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

let storedOTP = {}; // Store OTPs temporarily (For production, use a database)
const OTP_EXPIRY_TIME = 2 * 60 * 1000; // 2 minutes in milliseconds

// Function to generate a 6-digit OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email app password
  },
});

// Route to send OTP
app.post("/api/mail/otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = generateOTP(); // Generate OTP
  const expiryTime = Date.now() + OTP_EXPIRY_TIME; // Set expiry time (current time + 2 minutes)

  storedOTP[email] = { otp, expiryTime }; // Store OTP with expiry time

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}. It will expire in 2 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to send OTP", details: error.message });
  }
});

// Route to verify OTP
app.post("/api/mail/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp)
    return res.status(400).json({ error: "Email and OTP are required" });

  if (storedOTP[email]) {
    const { otp: storedOtp, expiryTime } = storedOTP[email];

    // Check if OTP has expired
    if (Date.now() > expiryTime) {
      delete storedOTP[email]; // Remove expired OTP
      return res
        .status(400)
        .json({ error: "OTP expired. Please request a new one." });
    }

    // Check if OTP matches
    if (storedOtp === otp) {
      delete storedOTP[email]; // Remove OTP after successful verification
      return res
        .status(200)
        .json({ message: "Welcome! OTP verified successfully." });
    }
  }

  res.status(400).json({ error: "Invalid OTP. Please try again." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
