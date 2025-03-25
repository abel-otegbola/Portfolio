import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

export default function ReCaptcha({ onChange }: {onChange: (token: string) => void}) {
  const [token, setToken] = useState<string>("");

  const handleVerify = () => {
    setToken(token);
    onChange(token);
  };

  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY || ""}
      onChange={handleVerify}
      size="normal" // or "normal" for checkbox
    />
  );
}