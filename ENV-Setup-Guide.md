# Setting up Environment Variables for EmailJS

For security reasons, it's best to store your EmailJS configuration in environment variables instead of hardcoding them in your source code. This guide will help you set up these environment variables.

## Creating the .env File

1. Create a file named `.env.local` in the root of your project (at the same level as package.json)
2. Add the following content to the file:

```
REACT_APP_EMAILJS_USER_ID=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=service_xernknr
REACT_APP_EMAILJS_TEMPLATE_ID=template_qrf67jo
```

3. Replace `your_public_key_here` with your actual EmailJS Public Key
   - Log in to your EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
   - Go to **Account** > **API Keys** in the left sidebar
   - Copy your **Public Key**

## Important Notes

- The `.env.local` file should never be committed to your repository
- Make sure to add `.env.local` to your `.gitignore` file
- Always include a `.env.example` file in your repository that shows the required variables without the actual values
- Create React App automatically loads environment variables from `.env.local`

## For Production Deployment

When deploying your site to a hosting service, you'll need to add these environment variables to your hosting platform:

- **Netlify**: Go to Site settings > Build & deploy > Environment variables
- **Vercel**: Go to Project settings > Environment Variables
- **GitHub Pages**: Since GitHub Pages doesn't support environment variables, consider switching to a different host for production use

## Restart Your Development Server

After creating or modifying the `.env.local` file, restart your development server:

```
npm start
```

## Testing

After setting up the environment variables, test your contact form to ensure emails are being sent correctly. 