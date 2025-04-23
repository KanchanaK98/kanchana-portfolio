# Setting up your EmailJS User ID (Public Key)

The EmailJS service and template IDs are now configured in your contact form, but you still need to add your **User ID** (Public Key) to make the email functionality work correctly.

## Get your User ID

1. Log in to your EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Go to **Account** > **API Keys** in the left sidebar
3. Copy your **Public Key**

## Add your User ID to the project

### Option 1: Create a .env.local file (recommended for development)

1. Create a file named `.env.local` in the root of your project:
```
REACT_APP_EMAILJS_USER_ID=your_public_key_here
```
2. Replace `your_public_key_here` with the Public Key you copied from EmailJS
3. Restart your development server with `npm start`

### Option 2: Edit the Contact.js file directly

1. Open `src/components/Contact/Contact.js`
2. Find this line:
```javascript
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || 'YOUR_USER_ID';
```
3. Replace `'YOUR_USER_ID'` with your actual Public Key:
```javascript
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || 'your_public_key_here';
```
4. Save the file and refresh your application

## For Production Deployment

When deploying your site to a hosting service, you'll need to add the environment variable there:

- **Netlify**: Go to Site settings > Build & deploy > Environment variables
- **Vercel**: Go to Project settings > Environment Variables
- **GitHub Pages**: Use Option 2 (editing the file directly) since GitHub Pages doesn't support environment variables

## Testing

After adding your User ID, test the contact form to ensure emails are being sent correctly. You should receive emails at the address associated with your EmailJS service. 