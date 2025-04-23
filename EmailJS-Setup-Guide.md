# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable the contact form on your portfolio website to send emails to your inbox.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for a portfolio website

## Step 2: Add an Email Service

1. Once logged in, go to the "Email Services" section
2. Click "Add New Service"
3. Choose an email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Name your service (e.g., "portfolio_contact_form")
6. Note down the **Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Design your email template using the variables from your form:
   - Use `{{from_name}}` for the sender's name
   - Use `{{reply_to}}` for the sender's email
   - Use `{{subject}}` for the email subject
   - Use `{{message}}` for the message body
4. Example template:
   ```
   From: {{from_name}} ({{reply_to}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
5. Save the template and note down the **Template ID**

## Step 4: Configure Environment Variables

### Option 1: For local development

Create a `.env.local` file in the root of your project with the following variables:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

Replace the placeholders with your actual IDs.

### Option 2: Edit directly in the code (less secure)

If you prefer not to use environment variables, you can directly edit the constants in the `src/components/Contact/Contact.js` file:

```javascript
const EMAILJS_USER_ID = 'YOUR_USER_ID'; // Replace with your public key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
```

## Step 5: Test Your Form

1. Run your website locally with `npm start`
2. Fill out the contact form and submit it
3. Check your email to see if you received the test message
4. If there are any issues, check the browser console for error messages

## Step 6: For Production Deployment

If you're using a hosting service like Netlify, Vercel, or GitHub Pages, you'll need to set the environment variables in your hosting platform:

- **Netlify**: Go to Site settings > Build & deploy > Environment variables
- **Vercel**: Go to Project settings > Environment Variables
- **GitHub Pages**: Consider using a different approach as GitHub Pages doesn't support environment variables

## Important Notes

- Your EmailJS user ID (public key) is designed to be used in client-side code, but it's still best practice to use environment variables.
- Make sure the form field names match the template variables.
- The free tier has a limit of 200 emails per month.
- If you want to receive notifications at a different email address than the one you used for the service, you can specify that in the template settings.

## Troubleshooting

If you're receiving the "Failed to send email" error:

1. Check that your environment variables or constants are set correctly
2. Verify that your EmailJS account is active
3. Check the browser console for detailed error messages
4. Make sure your template variable names match the form field names

## Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
- [Environment Variables in Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/) 