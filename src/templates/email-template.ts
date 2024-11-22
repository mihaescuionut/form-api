export const emailTemplate = (form: {
    name: string;
    email: string;
    subject: string;
    message: string;
}): string => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f4f4f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }
        .header h1 {
          color: #333333;
        }
        .content {
          padding: 20px;
          color: #555555;
        }
        .content p {
          margin: 10px 0;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #999999;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${form.name}</p>
          <p><strong>Email:</strong> ${form.email}</p>
          <p><strong>Subject:</strong> ${form.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${form.message}</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Form-api. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
`;
