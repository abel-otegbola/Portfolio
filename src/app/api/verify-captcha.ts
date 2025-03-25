import axios from 'axios';

export const verifyCaptcha = async (token: string) => {
  try {
    
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY || "",
        response: token
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return ({
      success: true,
      score: response.data.score
    });
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return({ success: false, error: 'Verification failed' });
  }
}