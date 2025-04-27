const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Replace these with your real Gmail account and App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ioannou.c@gmail.com',
    pass: 'nazw xxde oxwn qnca'
  }
});

app.post('/', async (req, res) => {
  try {
    await transporter.sendMail({
      from: 'ioannou.c@gmail.com',
      to: 'ioannou.c@gmail.com',
      subject: '🚨 Cyprus Appointment Alert!',
      text: 'Appointments may be available. Check Cyprus Embassy site immediately!'
    });
    res.send('✅ Email sent!');
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ Email sending failed.');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
