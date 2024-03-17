const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aarchiladani@gmail.com',
    pass: 'bwol kxhb tyla akbq',
  },
});

const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: 'Pizzaria <aarchiladani@gmail.com>',
    to: email,
    subject: 'OTP Verification',
    html: `
      <html>
        <head>
          <style>
            /* Unique CSS for email template */
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f4f4f4;
              border-radius: 5px;
            }
            .header {
              background-color: #ff8243;
              color: #fff;
              padding: 10px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              padding: 20px;
              background-color: #fff;
              border-radius: 0 0 5px 5px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .otp {
              font-size: 18px;
              color: #333;
            }
            .message {
              font-size: 14px;
              color: #555;
              margin-top: 10px;
            }
            .icon {
              font-size: 24px;
              margin-right: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2><span class="icon">&#127829;</span>Pizzaria</h2>
            </div>
            <div class="content">
              <p class="otp">Your One-Time Password (OTP) for account verification is: <strong>${otp}</strong>.</p>
              <p class="message">Please use this OTP to complete your registration process. Do not share this OTP with anyone for security reasons.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendOTP;
