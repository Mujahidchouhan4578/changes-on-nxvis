const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// EMAIL TO CUSTOMER


const sendCustomerConfirmation = async (customer) => {
  const mailOptions = {
    from: `"Krashak Support" <${process.env.EMAIL_USER}>`,

    to: customer.email,

    subject: "Customer Support Request Submitted Successfully",

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 30px;
        border: 1px solid #ddd;
        border-radius: 10px;
      ">

        <h2 style="color: #2e7d32;">
          Request Submitted Successfully
        </h2>

        <p>Hello <strong>${customer.name}</strong>,</p>

        <p>
          Thank you for contacting Krashak.
        </p>

        <p>
          Your customer support request has been
          successfully submitted.
        </p>

        <h3>Request Details</h3>

        <p>
          <strong>Name:</strong>
          ${customer.name}
        </p>

        <p>
          <strong>Email:</strong>
          ${customer.email}
        </p>

        <p>
          <strong>Phone:</strong>
          ${customer.phone}
        </p>

        <p>
          <strong>Issue:</strong>
          ${customer.issue}
        </p>

        <p>
          <strong>Status:</strong>
          ${customer.status}
        </p>

        <hr>

        <p>
          Our support team will review your request
          and contact you shortly.
        </p>

        <p>
          Regards,<br>
          <strong>Krashak Support Team</strong>
        </p>

      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};



// EMAIL TO COMPANY


const sendCompanyNotification = async (customer) => {
  const mailOptions = {
    from: `"Krashak Customer Service" <${process.env.EMAIL_USER}>`,

    to: process.env.COMPANY_EMAIL,

    subject: `New Customer Request - ${customer.name}`,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 700px;
        margin: auto;
        padding: 30px;
        border: 1px solid #ddd;
        border-radius: 10px;
      ">

        <h2 style="color: #2e7d32;">
          New Customer Support Request
        </h2>

        <p>
          A new customer support request has been
          submitted from the website.
        </p>

        <h3>Customer Details</h3>

        <p>
          <strong>Name:</strong>
          ${customer.name}
        </p>

        <p>
          <strong>Email:</strong>
          ${customer.email}
        </p>

        <p>
          <strong>Phone:</strong>
          ${customer.phone}
        </p>

        <p>
          <strong>Issue:</strong>
          ${customer.issue}
        </p>

        <p>
          <strong>Status:</strong>
          ${customer.status}
        </p>

        <hr>

        <p>
          Please check the customer service dashboard
          to manage this request.
        </p>

      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};


module.exports = {
  sendCustomerConfirmation,
  sendCompanyNotification,
};