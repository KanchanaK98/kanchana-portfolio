console.log('Environment Variable Test:');
console.log('REACT_APP_EMAILJS_USER_ID:', process.env.REACT_APP_EMAILJS_USER_ID);
console.log('REACT_APP_EMAILJS_SERVICE_ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log('REACT_APP_EMAILJS_TEMPLATE_ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);

export default function testEnv() {
  return true;
} 