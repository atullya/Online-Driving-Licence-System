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

  // Debug: Log the email received
  console.log("Email received for OTP:", email);

  // Generate OTP for testing purposes (hardcoded for now)
  const otp = 123456;
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
    res
      .status(200)
      .json({ success: true, message: "OTP sent successfully", otp: otp });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to send OTP", details: error.message });
  }
});

// Route to verify OTP
app.post("/api/mail/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  // Debug: Log the received OTP and email
  console.log("Received OTP:", otp);
  console.log("Received Email:", email);

  if (!email || !otp)
    return res.status(400).json({ error: "Email and OTP are required" });

  // Check if OTP exists in storedOTP for the given email
  if (storedOTP[email]) {
    const { otp: storedOtp, expiryTime } = storedOTP[email];

    // Debug: Log the stored OTP and expiry time
    console.log("Stored OTP:", storedOtp);
    console.log("Stored OTP Expiry Time:", expiryTime);

    // Check if OTP has expired
    if (Date.now() > expiryTime) {
      delete storedOTP[email]; // Remove expired OTP
      return res
        .status(400)
        .json({ error: "OTP expired. Please request a new one." });
    }

    // Check if OTP matches
    if (storedOtp.toString() === otp.toString()) {
      delete storedOTP[email]; // Remove OTP after successful verification
      return res
        .status(200)
        .json({ message: "Welcome! OTP verified successfully." });
    } else {
      // Debug: OTP mismatch
      console.log("OTP Mismatch: Stored OTP:", storedOtp, "Received OTP:", otp);
      return res.status(400).json({ error: "Invalid OTP. Please try again." }); // Send back specific OTP mismatch error
    }
  } else {
    console.log("No OTP found for this email.");
    return res.status(400).json({ error: "No OTP found for this email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
