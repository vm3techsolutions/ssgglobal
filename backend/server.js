import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import axios from "axios";
import { google } from "googleapis";
import fs from "fs"; // Required for reading JSON files
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Fix: Convert __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix: Import JSON file correctly
const credentialsPath = path.join(__dirname, "ssssg-formsubmission.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(express.json());
app.use(cors());

// Google Sheets setup
const sheets = google.sheets("v4");
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

// Google API Authentication
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const getAuthClient = async () => {
  return await auth.getClient();
};

// Payment Intent Route
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, fullName, email, address, country } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid payment amount" });
    }

    console.log("Received Payment Request:", req.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      receipt_email: email,
      metadata: { fullName, address, country },
    });

    console.log("Payment Intent Created:", paymentIntent);

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Payment Intent Error:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// Google Sheets Form Submission Route
app.post("/submit-form", async (req, res) => {
  const { fullname, phone, email, preferredDate, address, message } = req.body;
  
  if (!fullname || !phone || !email || !preferredDate || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const authClient = await getAuthClient();

    await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "RAW",
      resource: {
        values: [[fullname, phone, email, preferredDate, address, message]],
      },
    });

    res.status(200).json({ message: "Form submitted successfully and added to Google Sheets!" });
  } catch (error) {
    console.error("Form Submission Error:", error.message);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Start Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
